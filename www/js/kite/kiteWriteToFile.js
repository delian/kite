/**
 * Created by delian on 9/17/15.
 */
define(function(require,exports,module) {
    var logOb;
    var status = require('kiteOnOff');
    var fileName = "logSensors-"+(new Date()).getTime()+".txt";
    var logCache = [];

    window.resolveLocalFileSystemURL(cordova.file.dataDirectory, function(dir) {
        console.log("got main dir",dir);
        dir.getFile(fileName, {create:true}, function(file) {
            console.log("got the file", file);
            logOb = file;
            writeLog("App started\n");
            setInterval(function() {
                flushCache();
            },5000);
        });
    });

    function writeLog(str) {
        if(!logOb) return;
        var log = str;
        logOb.createWriter(function(fileWriter) {
            fileWriter.seek(fileWriter.length);
            var blob = new Blob([log], {type:'text/plain'});
            fileWriter.write(blob);
            console.log("ok, in theory i worked");
        }, fail);
    }

    function flushCache() {
        if (logCache.length>0) {
            var s = "";
            logCache.forEach(function(n) {
                s += JSON.stringify(n);
            });
            logCache=[];
            writeLog(s);
        }
    }

    function addLog(obj) {
        if (status.on) logCache.push({
            date: (new Date()).getTime(),
            data: obj
        });
    }

    return addLog;
});
