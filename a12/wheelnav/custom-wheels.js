<!-- Wheel 1 -->
var wheel1 = new wheelnav("divWheel1", null, 340, 340);
wheel1.wheelRadius = 160;
wheel1.navAngle = 90;
wheel1.centerX = 170;
wheel1.centerY = 170;
wheel1.titleAttr = { font: "100 18px Helvetica", fill: "#FFF" };
wheel1.titleSelectedAttr = { fill: "#111" };
wheel1.titleHoverAttr = { fill: "#111" };
wheel1.slicePathFunction = slicePath().DonutSlice;
wheel1.markerPathFunction = markerPath().PieLineMarker;
wheel1.markerEnable = true;
wheel1.clickModeRotate = false;
wheel1.createWheel();
wheel1.navigateWheel(8); // Let 0 (8th element) be selected by default

<!-- Wheel 1 item click handler -->
function wheel1Click(number) {
  var bits = 3;
  // Negative numbers and -0, represented as 10.
  if (number < 0 || number > 9) {
    sign = '<span class="opacity-50">1</span>';
	if (number == 10) {
	  number = 0;
	} else {
	  number = -number;
	}
  }
  else {
    sign = '<span class="opacity-50">0</span>';
  }
  var pad = "000" // 3 bits
  var binary = (number >>> 0).toString(2);
  binary = (pad + binary).slice(-pad.length);
  $("#wheel1Binary").html(sign + binary.slice(-bits));
}

<!-- Wheel 2 -->
var wheel2 = new wheelnav("divWheel2", null, 340, 340);
wheel2.wheelRadius = 160;
wheel2.navAngle = 90;
wheel2.centerX = 170;
wheel2.centerY = 170;
wheel2.titleAttr = { font: "100 18px Helvetica", fill: "#FFF" };
wheel2.titleSelectedAttr = { fill: "#111" };
wheel2.titleHoverAttr = { fill: "#111" };
wheel2.slicePathFunction = slicePath().DonutSlice;
wheel2.markerPathFunction = markerPath().PieLineMarker;
wheel2.markerEnable = true;
wheel2.clickModeRotate = false;
wheel2.createWheel();
wheel2.navigateWheel(8); // Let 0 (8th element) be selected by default

<!-- Wheel 2 item click handler -->
function wheel2Click(number) {
	var bits = 4;
	if (number < 0) {
	  number = -number;
	  var pad = "0000" // 4 bits
	  var binary = (number >>> 0).toString(2);
	  binary = (pad + binary).slice(-pad.length);
	  var inverse = (~number >>> 0).toString(2);
	  var complement = ((~number >>> 0) + 1).toString(2);
	  $("#wheel2Binary").addClass("opacity-50");
	  $("#wheel2Binary").html(binary.slice(-bits));
	  $("#wheel2Inverse").addClass("opacity-50");
	  $("#wheel2Inverse").html(inverse.slice(-bits));
	  $("#wheel2Complement").html(complement.slice(-bits));
	}
	else {
	  var pad = "0000" // 4 bits
	  var binary = (number >>> 0).toString(2);
	  binary = (pad + binary).slice(-pad.length);
	  $("#wheel2Binary").removeClass("opacity-50");
	  $("#wheel2Binary").html(binary.slice(-bits));
	  $("#wheel2Inverse").html("&nbsp;");
	  $("#wheel2Complement").html("&nbsp;");
	}
}
