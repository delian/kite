/**
 * Created by delian on 9/17/15.
 */
define(function(require,exports,module) {

    var sensors = require('kiteSensors');
    var data = [];
    var dCount = 100;
    var dPos = 0;

    for (var i = dCount-1; i>=0; i--) data[i]=[i,null];

    function draw() {
        $("#vspeedhistogram").sparkline(data,{
            width: '100%', height: 50, tooltipSuffix: ' v.speed'});
    }

    function addData(a) {
        //a = parseInt(Math.random() * 3000);
        //console.log('alt add',a,alPos);
        if (dPos<dCount) {
            data[dPos] = [dPos++, a];
        } else {
            data.shift();
            data[dCount-1] = [dPos++, a];
        }
        draw();
        $('#speedDiv').html(a?(a +' m/s'):('--'));
    }

    function vspeedFunc(a) {
        var count = 0;
        var speed = 0;
        data.forEach(function(n) {
            //console.log('NN',n);
            if (n[1] != null) {
                speed += parseInt(n[1]);
                count++;
            }
        });
        //console.log('Aaa',speed,count);
        $("#averageSpeed").html((speed/(count+0.0001)).toFixed(1)+' m/s');
    }


    function vspeed() {
        setInterval(function() {
            addData(sensors.coords.speed);
        },250);
        setInterval(function() {
            vspeedFunc();
        },250);
    }

    return vspeed;
});