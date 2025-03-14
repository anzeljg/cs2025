function calc_base10() {
  var dec3 = document.getElementById("dec3").value;
  var dec2 = document.getElementById("dec2").value;
  var dec1 = document.getElementById("dec1").value;
  var dec0 = document.getElementById("dec0").value;
  var col3 = dec3*1000;
  var col2 = dec2*100;
  var col1 = dec1*10;
  var col0 = dec0*1;
  var result = col3 + col2 + col1 + col0;
  document.getElementById("result-dec1").innerHTML = result;
  document.getElementById("result-dec2").innerHTML = result;
  document.getElementById("result-dec3").innerHTML = result;

  document.getElementById("dec-col3-row1").innerHTML = dec3;
  document.getElementById("dec-col3-row2").innerHTML = dec3;
  document.getElementById("dec-col3-row3").innerHTML = col3;

  document.getElementById("dec-col2-row1").innerHTML = dec2;
  document.getElementById("dec-col2-row2").innerHTML = dec2;
  document.getElementById("dec-col2-row3").innerHTML = col2;

  document.getElementById("dec-col1-row1").innerHTML = dec1;
  document.getElementById("dec-col1-row2").innerHTML = dec1;
  document.getElementById("dec-col1-row3").innerHTML = col1;

  document.getElementById("dec-col0-row1").innerHTML = dec0;
  document.getElementById("dec-col0-row2").innerHTML = dec0;
  document.getElementById("dec-col0-row3").innerHTML = col0;
}

function calc_base2() {
  var bin5 = document.getElementById("bin5").value;
  var bin4 = document.getElementById("bin4").value;
  var bin3 = document.getElementById("bin3").value;
  var bin2 = document.getElementById("bin2").value;
  var bin1 = document.getElementById("bin1").value;
  var bin0 = document.getElementById("bin0").value;
  var col5 = bin5*32;
  var col4 = bin4*16;
  var col3 = bin3*8;
  var col2 = bin2*4;
  var col1 = bin1*2;
  var col0 = bin0*1;
  var result = col5 + col4 + col3 + col2 + col1 + col0;
  document.getElementById("result-bin1").innerHTML = result;
  document.getElementById("result-bin2").innerHTML = result;
  document.getElementById("result-bin3").innerHTML = result;

  document.getElementById("bin-col5-row1").innerHTML = bin5;
  document.getElementById("bin-col5-row2").innerHTML = bin5;
  document.getElementById("bin-col5-row3").innerHTML = col5;

  document.getElementById("bin-col4-row1").innerHTML = bin4;
  document.getElementById("bin-col4-row2").innerHTML = bin4;
  document.getElementById("bin-col4-row3").innerHTML = col4;

  document.getElementById("bin-col3-row1").innerHTML = bin3;
  document.getElementById("bin-col3-row2").innerHTML = bin3;
  document.getElementById("bin-col3-row3").innerHTML = col3;

  document.getElementById("bin-col2-row1").innerHTML = bin2;
  document.getElementById("bin-col2-row2").innerHTML = bin2;
  document.getElementById("bin-col2-row3").innerHTML = col2;

  document.getElementById("bin-col1-row1").innerHTML = bin1;
  document.getElementById("bin-col1-row2").innerHTML = bin1;
  document.getElementById("bin-col1-row3").innerHTML = col1;

  document.getElementById("bin-col0-row1").innerHTML = bin0;
  document.getElementById("bin-col0-row2").innerHTML = bin0;
  document.getElementById("bin-col0-row3").innerHTML = col0;
}
