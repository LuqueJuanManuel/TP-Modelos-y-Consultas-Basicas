const db = require('../database/models');

module.exports = {
    list: (req, res) => {
        /* RETORNA LA VISTA GENRELIST CON TODOS LOS GENEROS DE LA DB */
        db.Genre.findAll()
        .then((genres) => {
         return res.render('genresList', {genres})
        })
    },
    detail: (req, res) => {
        const genreID = req.params.id;
        db.Genre.findByPk(genreID)
        .then((genre) => {
            return res.render("genresDetail", {genre});
        })
    },
}