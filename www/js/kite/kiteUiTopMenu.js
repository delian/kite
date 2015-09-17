/**
 * Created by delian on 9/17/15.
 */
define(function(require,exports,module) {
    function topMenu() {
        $("#topmenu").on("click",function() {
            $("#menupanel").panel("open");
        });
    }
    return topMenu;
});