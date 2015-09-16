/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        if (!!window.cordova)
            document.addEventListener('deviceready', this.onDeviceReady, false);
        else
            this.onDeviceReady(); // Execute it if there is no Cordova
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    drawCompass: function() {
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

        var degrees=0;

        function draw()
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

        function imgLoaded() {
            setInterval(draw,200);
        }

    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {

        // Lets implement my code
        setTimeout(function() {
            $("#topmenu").on("click",function() {
                $("#menupanel").panel("open");
            });
            $("#althistogram").sparkline([[1,1],[2,2],[3,3],[4,1],[5,2],[6,1],[7,6],[8,7],[9,4],[10,null],[11,2],[12,1],[13,1],[14,2],[15,3]],{
                width: '100%', height: 50, tooltipSuffix: ' altitude', tooltipFormat: '<span style="color: {{color}}">&#9679;</span> {{prefix}}{{x}}:{{y}}{{suffix}}</span>',
            });
            $("#vspeedhistogram").sparkline([10,11,15,10,8,0,-2,-7,1,11,20,25,30,27,10],{ width: '100%', height: 50, tooltipSuffix: ' v.speed'});
            $("#effectivenesshist").sparkline([0,0,0,10,0,0,0,7,0,0,20,25,30,27,10],{ width: '100%', height: 50, tooltipSuffix: ' effect.'});
            app.drawCompass();
        },50);

        return;
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();