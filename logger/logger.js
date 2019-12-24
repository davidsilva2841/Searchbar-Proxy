//https://github.com/winstonjs/winston/blob/master/examples/quick-start.js

require('./setup')();

const logger = require('winston');
const { format, transports } = require('winston');
const { combine, timestamp, label, printf } = format;


const myFormat = printf(({ level, message, timestamp, file, func, line }) => {
    let fileName = (file) ? file.padEnd(15) : 'NO_FILE'.padEnd(15);
    let funcName = (func) ? (func + '()').padEnd(15) : 'NO_FUNC'.padEnd(15);
    let lineNum = (line) ? line.toString().padEnd(4) : '?'.padEnd(4);
    let text = (message) ? message : 'NO_MESSAGE';
    return `[ ${timestamp} | ${level.padEnd(5)} | ${fileName} | ${funcName} | #${lineNum}]: ${text}`;
});


// File transport log
logger.configure({
    level: 'debug',
    format: format.combine(
        format.timestamp({
            format: 'YYYY-MM-DD_HH:mm:ss'
        }),
        format.errors({ stack: true }),
        format.simple(),
        format.splat(),
        myFormat
    ),
    transports: [
        new transports.File({ filename: './logger/logs/logs.log', level: 'debug'})
    ]
});



// Console transport log
logger.add(new transports.Console({
    format: format.combine(
        format.colorize(),
        format.simple(),
        myFormat
    )
}));



module.exports = logger;
