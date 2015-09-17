/**
 * Created by delian on 9/17/15.
 */
define(function(require,exports,module) {
    function init() {
        $("#effectivenesshist").sparkline([0,0,0,10,0,0,0,7,0,0,20,25,30,27,10],{ width: '100%', height: 50, tooltipSuffix: ' effect.'});
    }
    return init;
});