/**
 * Created by delian on 9/17/15.
 */
define(function(require,exports,module) {
    function vspeed() {
        $("#vspeedhistogram").sparkline([10,11,15,10,8,0,-2,-7,1,11,20,25,30,27,10],{ width: '100%', height: 50, tooltipSuffix: ' v.speed'});
    }
    return vspeed;
});