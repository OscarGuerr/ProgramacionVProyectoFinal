const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(require("./routes/record"));
// conexion
const dbo = require("./db/conn");
 
app.listen(port, () => {
  
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
 
  });
  console.log(`Servidor corre en el puerto: ${port}`);
});



/*const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
//importar routes
const authRoutes = require('./routes/auth');
const { db } = require('./models/User');

const app = express()
const port = 5000;
//middlewares
app.use(bodyParser.json());
app.use(cors());
//routes middleware
app.use('/api', authRoutes);





mongoose
  .connect(
    `mongodb://oguerrero:nTQp3Ektat12tGti@clusterzero-shard-00-00.kml00.mongodb.net:27017,clusterzero-shard-00-01.kml00.mongodb.net:27017,clusterzero-shard-00-02.kml00.mongodb.net:27017/Usuario?ssl=true&replicaSet=atlas-6ogobi-shard-0&authSource=admin&retryWrites=true&w=majority`
  )
    .then((result) => console.log('Conecntado a mongodb'))
    .catch((err) => console.log(err));

    app.listen(port, () => {
      console.log(`Conectado, servidor corren el puerto: ${port}`)
     });*/



