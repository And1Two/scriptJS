/**
 * scriptJS
 * Just a kind of Parser :P
 * 2020 by Andi Stancato
 */
(function(win, doc){
    "use script";

    /**
     * The Madness beginns here X_X
     */
    win.scriptJS = function(source) {
        var matches = source.matchAll(new RegExp("([\\\"|'])?[\\s]*(" + Object.keys(sjs).join("|") + ")[\\s]*\\(", "g"));

        for(let match of matches) {
            if(!match[1]) {
                source = source.replace(match[0], "$." + match[2] + "(");
            }
        }

        try {
            doc.getElementById("script").innerHTML = (new Function("$", "return " + source + ";"))(sjs);
        }catch(e) {
            doc.getElementById("script").innerHTML = "Syntax Error";
        }
    };

    /**
     * scriptJS - Let it be Scaleable :D
     */
    var sjs = {
        /**
         * 
         */
        add: function(a, b) {
            return Number(a) + Number(b);
        },

        /**
         * 
         */
        concat: function(a, b) {
            return a + "" + b;
        }
    };

})(window, document);
