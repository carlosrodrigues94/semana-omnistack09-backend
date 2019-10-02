const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();

mongoose.connect(
  "mongodb+srv://carlosjoker:qotsa12345@cluster0-qx0tv.mongodb.net/semana09?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

app.use(express.json()); // Manda as rotas receberem o body em formato de json
app.use(routes);

app.listen(8081);
