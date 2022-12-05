const express = require("express");
const {connect} = require("./src/utils/database"); 
const routerPets = require("./src/api/routes/pets.routes");
const dotenv = require("dotenv")

dotenv.config();
const PORT = process.env.PORT || 7000;

const app = express();
connect();  //Conexión con nuestra base de datos.


app.use(express.json()); //Necesario para poder usar json a la hora de enviar datos como puede ser con el método POST.
app.use(express.urlencoded({ extended : false }));

app.use("/pets", routerPets);

app.listen(PORT, ()=> console.log(`listening on port: http://localhost:${PORT}`));