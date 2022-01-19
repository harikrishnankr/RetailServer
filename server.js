import express from "express";
import bodyParser from "body-parser";
import { PORT } from "./src/config";
import { connectDBWithRetry } from "./src/db";
import { cors } from "./src/utils/cors";
import { errorHandler } from "./src/utils/errorHandler";
import { authGateway } from "./src/auth";

const app = express();
connectDBWithRetry();

app.use(cors);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(errorHandler);

const router = express.Router();

authGateway(router);

app.use("/api", router);

app.listen(PORT, () => {
    console.log("app listening at port %s", PORT);
});
