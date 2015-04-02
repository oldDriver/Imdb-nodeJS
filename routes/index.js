module.exports = function(app) {
    // public block
    app.get('/', require('../src/frontend/controller/index.js').get);
    app.get('/genre/:genreId', require('../src/frontend/controller/index.js').get);
    app.get('/movie/:id', require('../src/frontend/controller/movie_view.js').get);
    app.get('/genres', require('../src/frontend/controller/genre_list.js').get);
    app.get('/jobs', require('../src/frontend/controller/job_list.js').get);
    app.get('/persons', require('../src/frontend/controller/person_list.js').get);
    app.get('/persons/:jobId', require('../src/frontend/controller/person_list.js').get);
    app.get('/person/:id', require('../src/frontend/controller/person_view.js').get);

    // Ajax bl("/ock
    app.post('/ajax/movie', require('../src/ajax/movie.js').post);
    app.post('/ajax/person', require('../src/ajax/person.js').post);
    //app.get('/login', require('../src/frontend/controller/login').get);
    //app.post('/login', require('../src/frontend/controller/login').post);
    //app.get('/logout', require('../src/frontend/controller/logout').get);
};
