import express from "express";
import router from "./routes/visitor.route.js";

const app = express();

app.use(express.json());

app.use("/",router);

app.listen(3000, () => console.log("Listening on port 3000!"));