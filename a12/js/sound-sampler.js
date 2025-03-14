$(function() {

  var brd1;

  function f(x) {
    // Function: f(x) = 2*(sin(x) - cos(1.5*x) + sin(pi/2))
    return 2*(Math.sin(x) - Math.cos(1.5*x) + Math.sin(Math.PI/2));
  }

  function sampleCurve() {
    var freq = $("#sampler").slider("value");

    if (brd1 != null) JXG.JSXGraph.freeBoard(brd1);
    brd1 = JXG.JSXGraph.initBoard('jxgbox1', {boundingbox: [-0.5, 6, 11.5, -2], keepaspectratio:true, axis:true, grid:true, theme:'mono_thin'});
    brd1.suspendUpdate();
    var a = brd1.create('functiongraph', [f, 0, 11], {strokeWidth:3, strokeColor:'var(--bs-primary)'});
	if (freq > 0) {
	  var xval = [];
	  var yval = [];
	  for (var i=0; i<=11.001; i+=1/freq) {
	    // Whole numbers, halves, thirds, quarters etc.
	    xval.push(i);
		// Rounded to whole numbers, halves, thirds, quarters etc. based on frequency
        yval.push((Math.round(f(i)*freq)/freq).toFixed(1));
	  }
	  var b = brd1.create('chart', [xval, yval], {chartStyle:'line,point', strokeWidth:2, strokeColor:'var(--bs-danger)'});
	}
    brd1.unsuspendUpdate();
  }

  $("#sampler").slider({
    orientation: "horizontal",
    range: "min",
    max: 1,
	min: 0,
	step: 1,
    value: 0,
    slide: sampleCurve,
    change: sampleCurve
  });

  $("#sampler").slider("value", 0);

  $("#sampler").slider({
    create: function() {
      var state = "Yes";
	  if ($(this).slider("value") == 0) {
        state = "No";
	  }
      $("#sampler-handle").text(state);
    },
    slide: function(event, ui) {
      var state = "Yes";
	  if (ui.value == 0) {
        state = "No";
	  }
      $("#sampler-handle").text(state);
    }
  });

  sampleCurve();

});
