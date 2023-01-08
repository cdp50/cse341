const routes = require('express').Router();

const myController = require('../controllers');

routes.get('/', (req, res) =>{
    res.send("Claudio Parra");
});

routes.get('/test', (req, res) =>{
    res.send("Francesca Parra");
});

routes.get('/url', myController.getNames);

module.exports = routes;