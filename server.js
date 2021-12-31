import http from "http";
import { PORT } from "./src/config";
import App from "./src/app";

const server = http
    .createServer((req, res) => {
        res.end("Hello from the server");
    })
    .listen(PORT, () => {
        console.log(`Server is up and running on Port : ${PORT}`);
        App();
    });

export default server;
