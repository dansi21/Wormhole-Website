const express = require('express');

//Delete In Prod
const elementsRoute = require('./elements.js')

const router = express.Router();

module.exports = () => {
    router.get('/', (request, response) => {
        //response.sendFile(patch.join(__dirname,'./static/index.ejs'))
        response.render('pages/elements');
    });


    return router;
}