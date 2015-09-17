/**
 * Created by delian on 9/17/15.
 */
define(function(require,exports,module) {

    var log = require('kiteWriteToFile');

    var sensors = {
        coords: {
            latitude: 0,
            longitude: 0,
            timestamp: 0,
            altitude: 0,
            accuracy: 0,
            altitudeAccuracy: 0,
            heading: 0,
            speed: 0
        },
        compass: {
            heading: 0
        },
        pressure: {
            val: 0,
            timestamp: 0
        },
        accel: {
            x: 0,
            y: 0,
            z: 0,
            timestamp: 0
        }
    };

    function compassSuccess(degrees) {
        sensors.compass.heading = degrees;
        log({ type: 'compass', value: sensors.compass });
    }

    function compassError() {
        alert('Compass error');
    }

    function barSuccess(p) {
        sensors.pressure.val = p.val;
        sensors.pressure.timestamp = p.timestamp;
        log({ type: 'barometer', value: sensors.pressure});
    }

    function barError() {
        alert('Barometer error')
    }

    function geoSuccess(g) {
        sensors.coords.latitude = g.coords.latitude;
        sensors.coords.longitude = g.coords.longitude;
        sensors.coords.altitude = g.coords.altitude;
        sensors.coords.accuracy = g.coords.accuracy;
        sensors.coords.heading = g.coords.heading;
        sensors.coords.speed = g.coords.speed;
        sensors.coords.altitudeAccuracy = g.coords.altitudeAccuracy;
        sensors.coords.timestamp = g.timestamp;
        log({ type: 'geolocation', value: sensors.coords });
    }

    function geoError() {
        alert('geolocation error');
    }

    function accSuccess(a) {
        sensors.accel.x = a.x;
        sensors.accel.y = a.y;
        sensors.accel.z = a.z;
        sensors.accel.timestamp = a.timestamp;
        log({ type: 'accelerometer', value: sensors.accel });
    }

    function accError() {
        alert('accelerometer error');
    }

    var compassId = navigator.compass.watchHeading(compassSuccess, compassError);
    var barometerId = navigator.barometer.watchPressure(barSuccess, barError, { frequency: 20 });
    var geoId = navigator.geolocation.watchPosition(geoSuccess, geoError, {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 20,
        frequency: 20
    });
    var accelId = navigator.accelerometer.watchAcceleration(accSuccess, accError, {
        frequency: 10
    });

    return sensors;
});