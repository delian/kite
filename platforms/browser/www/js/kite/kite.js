/**
 * Created by delian on 9/16/15.
 */
define(function(require,exports,module) {
    // Lets include the template

    var out = new EJS({ url: 'ejs/base.ejs' }).render({ test: 1 }); // Render the template
    document.getElementById('viewport').innerHTML = out;

    var compass = require('kiteCompass');

    setTimeout(function() {
        $("#topmenu").on("click",function() {
            $("#menupanel").panel("open");
        });
        $("#althistogram").sparkline([[1,1],[2,2],[3,3],[4,1],[5,2],[6,1],[7,6],[8,7],[9,4],[10,null],[11,2],[12,1],[13,1],[14,2],[15,3]],{
            width: '100%', height: 50, tooltipSuffix: ' altitude', tooltipFormat: '<span style="color: {{color}}">&#9679;</span> {{prefix}}{{x}}:{{y}}{{suffix}}</span>',
        });
        $("#vspeedhistogram").sparkline([10,11,15,10,8,0,-2,-7,1,11,20,25,30,27,10],{ width: '100%', height: 50, tooltipSuffix: ' v.speed'});
        $("#effectivenesshist").sparkline([0,0,0,10,0,0,0,7,0,0,20,25,30,27,10],{ width: '100%', height: 50, tooltipSuffix: ' effect.'});
        compass.start();
    },50);

    return;
});