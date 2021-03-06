/**
 * Utility functions.
 */
var Util = (function (my) {

    /**
     * Returns the text width for the given element.
     *
     * @param el the element
     */
    my.getTextWidth = function(el) {
        return (el.clientWidth + 1);
    };

    /**
     * Returns the text height for the given element.
     *
     * @param el the element
     */
    my.getTextHeight = function(el) {
        return (el.clientHeight + 1);
    };

    /**
     * Casts the given number to integer.
     *
     * @param number the number to cast
     */
    my.toInteger = function(number) {
        return Math.round(Number(number));
    };

    /**
     * Plays the sound given by id.
     *
     * @param id the identifier of the audio element.
     */
    my.playSoundNotification = function(id) {
        document.getElementById(id).play();
    };

    return my;
}(Util || {}));