const sharkevent = require("./app");
const logger = new sharkevent("myapplication.log", ["ERR", "WARN", "INFO"], { port: 8080, host: "localhost" });
let x = 0;
setInterval(() => {
    x++;
    logger.emit("info", "I am at "+x.toString());
}, 1000);