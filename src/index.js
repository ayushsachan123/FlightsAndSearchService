const express = require("express");
const bodyParser = require("body-parser");
const serverConfig = require("./config/serverConfig.js");

const setupAndStartServer = async () => {
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    
    app.listen(serverConfig.PORT, () => {
        console.log(`Server is running on port ${serverConfig.PORT}`);
    });
};

setupAndStartServer();
