import express from "express";
import router from "./routes/visitor.route.js";
import mongoose from "mongoose";

//DB
mongoose.connect(
  process.env.MONGODB_URL || "mongodb://localhost:27017/Visitors",
  { useNewUrlParser: true }
);
mongoose.connection.on("error", function (e) {
  console.error(e);
});

//Schema
const schema = {
  date: Date,
  name: String,
};
//Model
const Visitor = mongoose.model("Visitor", schema, "Visitor");

//Controller
app.get('/',(req, res) => {
    db.connect();
    const { name } = req.query;
    const date = Date.now();
    const newVisitor = {};
    newVisitor.name = name || "Anónimo";
    newVisitor.date = date;
  
    Visitor.create(newVisitor, (err, visitor) => {
      if (err) res.sendStatus(500);
      res.send(`<h1>El visitante fue almacenado con éxito</h1>`);
    });
  });
  


const app = express();

app.use(express.json());

app.use("/", router);

app.listen(3000, () => console.log("Listening on port 3000!"));
