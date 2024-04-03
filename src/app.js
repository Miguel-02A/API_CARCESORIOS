import express from "express";
import morgan from "morgan";

//Rutas

import CarcesoriosRutas from "./routes/Rutas_Carcesorios";

const cors = require('cors')

const app = express();

app.set("port",4000);

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

app.use("/carcesorios", CarcesoriosRutas);

export default app;