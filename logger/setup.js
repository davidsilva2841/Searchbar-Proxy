const path = require('path');

Object.defineProperty(global, '__stack', {
    get: function() {
        var orig = Error.prepareStackTrace;
        Error.prepareStackTrace = function(_, stack) {
            return stack;
        };
        var err = new Error;
        Error.captureStackTrace(err, arguments.callee);
        var stack = err.stack;
        Error.prepareStackTrace = orig;
        return stack;
    }
});

const addLineNumber = () => {
    Object.defineProperty(global, '__line', {
        get: function() {
            return __stack[1].getLineNumber();
        }
    });
};

const addFuncName = () => {
    Object.defineProperty(global, '__function', {
        get: function() {
            return __stack[1].getFunctionName();
        }
    });
};

const addFileName = () => {
    Object.defineProperty(global, '__file', {
        get: function() {
            return path.basename(__stack[1].getFileName());
        }
    });
};





const setup = () => {
	addFuncName();
	addLineNumber();
	addFileName();
};


module.exports = setup;


