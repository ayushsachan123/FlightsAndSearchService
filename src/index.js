import express from "express";
import serverConfig from "./config/serverConfig.js";
import bodyParser from "body-parser";

const setupAndStartServer = async () => {
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    
    app.listen(serverConfig.PORT, () => {
        console.log(`Server is running on port ${serverConfig.PORT}`);
    });
}

setupAndStartServer();
