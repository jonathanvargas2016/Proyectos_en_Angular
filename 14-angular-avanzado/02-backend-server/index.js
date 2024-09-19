const express = require("express");
require('dotenv').config()
const { dbConnection } = require("./database/config");
const app = express();
const cors = require('cors')

//config cors
app.use(cors())

//conexion db
dbConnection();

// rutas
app.get("/", (req, res) => {
  const body = {
    message: true,
  };
  res.json({
    ...body,
  });
});

app.listen(process.env.PORT, () => {
  console.log("listening on", process.env.PORT);
});
