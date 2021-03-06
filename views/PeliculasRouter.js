const { Router } = require('express');
const express = require('express');
const router = express.Router();

const PeliculasController = require('../controllers/PeliculasController');


//CRUD RESTful

//read all of the films
router.get('/retrieve', PeliculasController.traePeliculas);
//http://localhost:3500/peliculas

//Register a new film
router.post('/register', PeliculasController.registraPelicula);
//http://localhost:3500/peliculas

//Search for films by title
router.get('/titulo', PeliculasController.peliculasTitulo);


//Search for new releases
router.get('/novedades', PeliculasController.traeNovedades);


//DELETE A FILM BY ID
// router.get ()
//Endpoint para borrar una pelicula
router.delete("/:id", PeliculasController.deleteById);

module.exports = router;