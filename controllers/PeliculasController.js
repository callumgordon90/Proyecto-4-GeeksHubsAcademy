const { default: axios } = require("axios");
const {Pelicula} = require("../models/index");
const PeliculasController = {};


//functions of the controller


// Get all films
PeliculasController.traePeliculas = (req, res) => {

    try {

        Pelicula.findAll().then(pelicula => {
            res.send(pelicula);

            
        });

    } catch (error) {
        console.log (error);
        res.send(error);
    }
    

};

PeliculasController.registraPelicula = async (req, res) => {

    try {

        let title = req.body.title;
        let overview = req.body.overview;
        let price = req.body.price;
        let image = req.body.image;
        let date = req.body.date;
        

        Pelicula.create({
            title: title,
            overview: overview,
            price: price,
            image: image,
            date: date


        }).then(pelicula => {
            res.send(`${pelicula.title} has been added to our database`);
        });

    } catch (error) {
        console.log (error);
        res.send(error);
    }
    

};


// PeliculasController.peliculasTitulo = (req, res) => {
    //Buscar pelicula por titulo
 //   Pelicula.findAll({ where : { titulo : req.params.titulo }})
 //   .then(data => {
//        console.log(data)
 //       res.send(data)
 //   });
// }



PeliculasController.peliculasTitulo = async (req, res) => {

   let busqueda = req.query.criterio;

    try {

        let resultados = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=210d6a5dd3f16419ce349c9f1b200d6d&language=en-US&query=${busqueda}&page=1&include_adult=false`);

        //this was the old endpoint but ive changed it now: `https://api.themoviedb.org/3/search/movie?api_key=210d6a5dd3f16419ce349c9f1b200d6d&language=en-US&query=${busqueda}&page=1&include_adult=false`;



         res.send(resultados.data);
        

    } catch (error) {
        console.log(error);
    }
}

PeliculasController.traeNovedades = async (req, res) => {

    try {

        let resultados = await axios.get("https://api.themoviedb.org/3/movie/upcoming?api_key=210d6a5dd3f16419ce349c9f1b200d6d&language=en-En&page=1");

        res.send(resultados.data);

    } catch (error) {
        console.log(error);
    }
}

PeliculasController.deleteById =(req,res) => {
    let id = req.params.id;

    try{
        Pelicula.destroy({
            where : { id : id},
            truncate : false
        })
      
        .then(movieDeleted =>{
            console.log(movieDeleted);
            res.send(`La pelicula con la id ${id} ha sido eliminada`);
        })
    }
    catch(error){
        send.error(error);
    }
};


module.exports = PeliculasController;