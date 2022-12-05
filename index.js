const express = require("express");
const {connect} = require("./src/utils/database"); 
const dotenv = require("dotenv")

//ROUTERS

const routerPets = require("./src/api/routes/pets.routes");



connect();  //Conexión con nuestra base de datos.
dotenv.config();
const PORT = process.env.PORT || 7000;

const app = express();



app.use(express.json()); //Necesario para poder usar json a la hora de enviar datos como puede ser con el método POST.
app.use(express.urlencoded({ extended : false }));

app.use("/pets", routerPets);

app.use('*', (req, res) => res.status(404).json('La ruta seleccionada no existe.'));
app.use((error, res) => {

    return res.status( error.status || 500 ).json("Error: " + error.message || "Unexpected error");

})

app.listen(PORT, ()=> console.log(`listening on port: http://localhost:${PORT}`));