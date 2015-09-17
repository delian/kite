/**
 * Created by delian on 9/17/15.
 */
define(function(require,exports,module) {

    var sensors = require('kiteSensors');
    var altitude = [];
    var alCount = 100;
    var alPos = 0;

    var oldAlt = null;

    for (var i = alCount-1; i>=0; i--) altitude[i]=[i,null];

    function draw() {
        $("#althistogram").sparkline(altitude,{
//            width: '100%', height: 50, tooltipSuffix: ' altitude', tooltipFormat: '<span style="color: {{color}}">&#9679;</span> {{prefix}}{{x}}:{{y}}{{suffix}}</span>'
            width: '100%', height: 50, tooltipSuffix: ' altitude', tooltipFormat: '<span style="color: {{color}}">&#9679;</span> {{y}} m</span>'
        });
    }

    function addAlt(a) {
        if (alPos<alCount) {
            altitude[alPos] = [alPos++, a];
        } else {
            altitude.shift();
            altitude[alCount-1] = [alPos++, a];
        }
        draw();
        $('#altitudeDiv').html(a?(a+' M'):('--'));
    }

    function altDelta(a) {
        if (oldAlt && a) {
            $('#altitudeDelta').html((a-oldAlt)+' M');
        }
        if (a) oldAlt = a;
    }

    function altitudeFunc() {
        setInterval(function() {
            addAlt(sensors.coords.altitude);
        }, 250);

        setInterval(function() {
            altDelta(sensors.coords.altitude);
        },1000);
    }

    return altitudeFunc;
});
