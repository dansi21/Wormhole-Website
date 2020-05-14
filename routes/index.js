const express = require('express');

const elementsRoute = require('./elements');
const postedRoute = require('./post');

const router = express.Router();

module.exports = () => {
    router.get('/', (request, response) => {
        //response.sendFile(patch.join(__dirname,'./static/index.ejs'))
        response.render('pages/index');
    });

    router.use('/elements', elementsRoute());
    router.use('/post', postedRoute());

    return router;
}