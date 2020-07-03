# shark-logger

Example:
```

const sharkevent = require("./app");

const logger = new sharkevent("myapplication.log", ["ERR", "WARN", "INFO"], { port: 8080, host: "localhost" });

logger.emit("info", "Helloworld");

logger.emit("warn", "Be careful!");

logger.emit("error", "OOOPS!");

```
This will log three things into the file `myapplication.log` and send it to `localhost` at port `8080` via udp
