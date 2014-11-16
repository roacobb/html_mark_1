// The root namespace. All other namespaces will 
// be contained within the root.
if (typeof CYC == "undefined" || !CYC) {
    var CYC = {};
}

//
CYC.namespace = function () {
    if (arguments.length == 0)
        return null;

    var lastns = null;
    for (var i = 0; i < arguments.length; i++)
        lastns = CYC._namespace(arguments[i]);

    return lastns;
};

// Parts of this function were borrowed from David Flannigan's 
// JavaScript in a Nutshell 5
CYC._namespace = function (path) {
    if (!path) return null;

    // Check to see that we have a valid namespace
    if (path.charAt(0) == ''
            || path.charAt(path.length - 1) == '.'
            || path.indexOf('..') != -1)
        throw new Error("Invalid namespace " + path);

    var namespace = CYC;
    var parts = path.split('.');

    for (var i = 0; i < parts.length; i++) {
        var part = parts[i];

        // Check if the first name part is 'CHAMP' and skip it 
        // since it's the default namspace and already exist
        if (i == 0 && part == 'CYC')
            continue;

        namespace[part] = namespace[part] || {};
        namespace = namespace[part];
    }

    return namespace;
};

// Create default namespaces

// Will hold common utilities that are used by all modules
CYC.namespace("CYC.util");

// Will hold common reusable code
CYC.namespace("CYC.common");

// Will hold classes that wrap calls to services via Ajax
CYC.namespace("CYC.services");

// Global configuration values
CYC.config = {
    baseUrl: $("#baseUrl").val()
};

// Where we will cache client side data
CYC.util.cache = {};

CYC.ui = {
    // Commonly used key codes
    // These were taken from jQuery UI. See $.ui.keyCode for more information
    KeyCode: {
        BACKSPACE: 8,
        COMMA: 188,
        DELETE: 46,
        DOWN: 40,
        END: 35,
        ENTER: 13,
        ESCAPE: 27,
        HOME: 36,
        LEFT: 37,
        NUMPAD_ADD: 107,
        NUMPAD_DECIMAL: 110,
        NUMPAD_DIVIDE: 111,
        NUMPAD_ENTER: 108,
        NUMPAD_MULTIPLY: 106,
        NUMPAD_SUBTRACT: 109,
        PAGE_DOWN: 34,
        PAGE_UP: 33,
        PERIOD: 190,
        RIGHT: 39,
        SPACE: 32,
        TAB: 9,
        UP: 38
    }
};

