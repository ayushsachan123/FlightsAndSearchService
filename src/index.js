import express from "express";
import serverConfig from "./config/serverConfig.js";


const setupAndStartServer = async () => {
    const app = express();
    app.listen(serverConfig.PORT, () => {
        console.log(`Server is running on port ${serverConfig.PORT}`);
    });
}

setupAndStartServer();
