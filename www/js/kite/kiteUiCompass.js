/**
 * Created by delian on 9/16/15.
 */
define(function(require,exports,module) {

    var sensors = require('kiteSensors');

    function compass() {
        var canvas = document.getElementById('compass');
        // Canvas supported?
        ctx = canvas.getContext('2d');
        // Load the needle image
        needle = new Image();
        needle.src = 'img/needle.png';
        // Load the compass image
        img = new Image();
        img.src = 'img/compass.png';
        img.onload = imgLoaded;

        function draw(degrees)
        {
            // Clear canvas
            ctx.fillStyle="#FFFFFF";
            ctx.fillRect(0,0,200,200);
            // Draw the compass onto the canvas
            ctx.drawImage(img, 0, 0);
            // Save the current drawing state
            ctx.save();
            // Now move across and down half the
            ctx.translate(100, 100);
            // Rotate around this point
            ctx.rotate(degrees * (Math.PI / 180));
            // Draw the image back and up
            ctx.drawImage(needle, -100, -100);
            // Restore the previous drawing state
            ctx.restore();
            // Increment the angle of the needle by 5 degrees
            degrees += 5;
        }


        function imgLoaded() { // Start the compass
            setInterval(function() {
                draw(sensors.compass.heading);
            },200);
        }

    }
    return compass;
});
