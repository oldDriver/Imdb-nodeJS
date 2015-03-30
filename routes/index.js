module.exports = function(app) {
    // public block
    app.get('/', require('../src/frontend/controller/index.js').get);
};
