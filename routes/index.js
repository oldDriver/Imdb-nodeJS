module.exports = function(app) {
    // public block
    app.get('/', require('../src/frontend/controller/index.js').get);
    app.get('/movie/:id', require('../src/frontend/controller/movie-view.js').get);

    // Ajax bl("/ock
    app.post('/ajax/movie', require('../src/ajax/movie.js').post);
    //app.get('/login', require('../src/frontend/controller/login').get);
    //app.post('/login', require('../src/frontend/controller/login').post);
    //app.get('/logout', require('../src/frontend/controller/logout').get);
};
