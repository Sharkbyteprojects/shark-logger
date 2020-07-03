const dgram = require('dgram');
const s = dgram.createSocket('udp4');
s.on('message', function (msg, rinfo) {
    process.stdout.write('LOG: ' + msg.toString());
});
s.bind(8080); 