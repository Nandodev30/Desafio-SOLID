import { app } from ".";
import swaggerUi from "swagger-ui-express";

import swaggerFile from "./swagger.json";

app.listen(3333, () => console.log("Server is running!"));

app.use("/desafio", swaggerUi.serve, swaggerUi.setup(swaggerFile))