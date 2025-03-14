// adds leading zeros to a number
function pad(num, length) {
	var string = num + ""; // convert to string
	while (string.length < length) {
		string = "0" + string;
	}
	return string;
}

// converts a number to a binary string representing the number
function decimalToBinary(dec) {
	return parseInt(dec).toString(2);
}

// converts a binary number formatted as a string into a number
function binaryToDecimal(bin) {
	return parseInt(bin, 2);
}

// converts a double number into the IEEE representation bit string
/*
function doubleToIEEE(f) {
    var buf = new ArrayBuffer(8);
    (new Float64Array(buf))[0] = f;
    var parts = [(new Uint32Array(buf))[0], (new Uint32Array(buf))[1]];
    return pad(decimalToBinary(parts[1]), 32) + pad(decimalToBinary(parts[0]), 32);
}
*/

// converts a float number into the IEE representation bit string
function floatToIEEE(f) {
    var buf = new ArrayBuffer(4);
    (new Float32Array(buf))[0] = f;
    return pad(decimalToBinary((new Uint32Array(buf))[0]), 32);
}


(function() {
	// cache DOM
	var floatInput = $('#input-float'), 
		rawBinaryOutput = $('#raw-binary-output'),
		floatOutputRow = $('#float-output-row'),
		floatMarkerRow = $('#float-marker-row'),
		specialInputValueSelect = $('#special-input-value'),
		stringOutputHeading = $('#string-output');

	var val = NaN;

	function updateOutput() {
		try {
			var f = val;

			stringOutputHeading.html(f.toString());

			// float
			var floatBitString = floatToIEEE(f);
			var currentBit = 31;
			for (var i = 0; i < 3; i++) {
				var bitString = "",
					cellHTML = "",
					markHTML = "";
				if (currentBit == 31) {
					bitString = floatBitString.substring(0, 1);
					cellHTML += "<span id=\"fp" + currentBit + "\">" + bitString + "</span>";
					markHTML += "<span>" + currentBit + "</span>";
					currentBit--;
				} else if (currentBit <= 30 && currentBit >= 23) {
					bitString = floatBitString.substring(1, 9);
					for (var j = 0; j < bitString.length; j++) {
						cellHTML += "<span id=\"fp" + currentBit + "\">" + bitString.substring(j, j + 1) + "</span>";
						markHTML += "<span>";
						if (currentBit == 30 || currentBit == 23) {
							markHTML += currentBit;
						} else {
							markHTML += '&nbsp;'
						}
						markHTML += "</span>";
						currentBit--;
					}
				} else {
					bitString = floatBitString.substring(9, 32);
					for (var j = 0; j < bitString.length; j++) {
						cellHTML += "<span id=\"fp" + currentBit + "\">" + bitString.substring(j, j + 1) + "</span>";
						markHTML += "<span>";
						if (currentBit == 22 || currentBit == 0) {
							markHTML += currentBit;
						} else {
							markHTML += '&nbsp;'
						}
						markHTML += "</span>";
						currentBit--;
					}
				}
				floatOutputRow.children().eq(i).html(cellHTML);
				floatMarkerRow.children().eq(i).html(markHTML);
			}

		}
		catch (e) {
			console.log(e);
			// TODO: show error
		}
	}

	floatInput.on('change keyup', function() {
		try {
			val = parseFloat(floatInput.val());
			if (isNaN(val)) {
				specialInputValueSelect.val('nan');
			}
			else if (Object.is(val, +0)) {
				specialInputValueSelect.val('positive-0');
			}
			else if (Object.is(val, -0)) {
				specialInputValueSelect.val('negative-0');
			}
			else if (val === +Infinity) {
				specialInputValueSelect.val('positive-inf');
			}
			else if (val === -Infinity) {
				specialInputValueSelect.val('negative-inf');
			}
			else {
				specialInputValueSelect.val('number');
			}
		}
		catch (e) {
			val = NaN;
		}
		updateOutput();
	}).trigger('change');

	specialInputValueSelect.on('change', function() {
		switch (specialInputValueSelect.val()) {
			case "number":
				floatInput.trigger('change');
				break;
			case "positive-0":
				val = +0;
				floatInput.val('+0');
				break;
			case "negative-0":
				val = -0;
				floatInput.val('-0');
				break;
			case "positive-inf":
				val = +Infinity;
				floatInput.val('+Infinity');
				break;
			case "negative-inf":
				val = -Infinity
				floatInput.val('-Infinity');
				break;
			default:
				val = NaN
				break;
		}
		updateOutput();
	})
})();
