/**
 * Created by delian on 9/17/15.
 */
define(function(require,exports,module) {
    var status = require('kiteOnOff');
    function init() {
        $('#flip-min').on('change', function(event, ui) {
            if ($('#flip-min').val() == 'on')
                status.on = true;
            else
                status.on = false;
            console.log('Flip switch, status set to', status.on);
        });
    }
    return init;
});