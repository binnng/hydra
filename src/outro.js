
// RequireJS && SeaJS
if (typeof define === 'function') {
    define(function() {
        return hydra;
    });

// NodeJS
} else if (typeof exports !== 'undefined') {
    module.exports = hydra;
} else {
    this.hydra = hydra;
}

})(window, document);