/**
 * Created by delian on 9/17/15.
 */
define(function(require,exports,module) {
    function altitude() {
        $("#althistogram").sparkline([[1,1],[2,2],[3,3],[4,1],[5,2],[6,1],[7,6],[8,7],[9,4],[10,null],[11,2],[12,1],[13,1],[14,2],[15,3]],{
            width: '100%', height: 50, tooltipSuffix: ' altitude', tooltipFormat: '<span style="color: {{color}}">&#9679;</span> {{prefix}}{{x}}:{{y}}{{suffix}}</span>'
        });
    }
    return altitude;
});
