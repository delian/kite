/**
 * Created by delian on 9/16/15.
 */
define(function(require,exports,module) {
    // Lets include the template

    //var out = new EJS({ url: 'ejs/base.ejs' }).render({ test: 1 }); // Render the template
    //document.getElementById('viewport').innerHTML = out;

    setTimeout(function() {
        require('kiteUiOnOffSwitch')(); // Turn the On Off switch
        require('kiteUiCompass')(); // Turn on the compass
        require('kiteUiTopMenu')(); // Turn on the top menu
        require('kiteUiAltitude')(); // Turn on the altitude UI
        require('kiteUiVerticalSpeed')(); // Turn on vertical speed
        require('kiteUiEffectiveness')(); // Turn on effectiveness

    },50);
});