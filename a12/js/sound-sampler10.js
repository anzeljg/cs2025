$(function() {

  var brd2;

  function f(x) {
    // Function: f(x) = 2*(sin(x) - cos(1.5*x) + sin(pi/2))
    return 2*(Math.sin(x) - Math.cos(1.5*x) + Math.sin(Math.PI/2));
  }

  function sampleCurve() {
    var freq = $("#sampler2").slider("value");

    if (brd2 != null) JXG.JSXGraph.freeBoard(brd2);
    brd2 = JXG.JSXGraph.initBoard('jxgbox2', {boundingbox: [-0.5, 6, 11.5, -2], keepaspectratio:true, axis:true, grid:true, theme:'mono_thin'});
    brd2.suspendUpdate();
    var a = brd2.create('functiongraph', [f, 0, 11], {strokeWidth:3, strokeColor:'var(--bs-primary)'});
	if (freq > 0) {
	  var xval = [];
	  var yval = [];
	  for (var i=0; i<=11.001; i+=1/freq) {
	    // Whole numbers, halves, thirds, quarters etc.
	    xval.push(i);
		// Rounded to whole numbers, halves, thirds, quarters etc. based on frequency
        yval.push((Math.round(f(i)*freq)/freq).toFixed(1));
	  }
	  var b = brd2.create('chart', [xval, yval], {chartStyle:'line,point', strokeWidth:2, strokeColor:'var(--bs-danger)'});
	}
    brd2.unsuspendUpdate();
  }

  $("#sampler2").slider({
    orientation: "horizontal",
    range: "min",
    max: 50,
	min: 0,
	step: 1,
    value: 0,
    slide: sampleCurve,
    change: sampleCurve
  });

  $("#sampler2").slider("value", 0);

  $("#sampler2").slider({
    create: function() {
      $("#sampler2-handle").text($(this).slider("value") + " Hz");
    },
    slide: function(event, ui) {
      $("#sampler2-handle").text(ui.value + " Hz");
    }
  });

  sampleCurve();

});
