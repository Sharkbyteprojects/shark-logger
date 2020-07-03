'use strict';
const fs = require("fs");
const EventEmitter = require("events");
const util = require("util");
const dgram = require('dgram');
const s = dgram.createSocket('udp4');
class SharkEventLogger extends EventEmitter {
    constructor(file, levels, remote) {
        super();
        this.remote = remote;
        this.file = file;
        this.levels = levels;
        this.on("error", this.log.bind(this, "ERR"));
        this.on("warn", this.log.bind(this, "WARN"));
        this.on("info", this.log.bind(this, "INFO"));
    }
    log(level, data) {
        if (this.levels.indexOf(level) > -1) {
            const logD = util.format('%s (%s) %s\n', new Date(), level, data);
            fs.appendFile(this.file, logD, "utf-8", (err) => { });
            if (this.remote && this.remote.port && this.remote.host) {
                s.send(Buffer.from(logD), this.remote.port, this.remote.host); 
            }
        }
    }
}
module.exports = SharkEventLogger;