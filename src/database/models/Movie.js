module.exports = (sequelize, dataTypes) => {

    const alias = "Movie";

    const cols = {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        title: {
            type: dataTypes.STRING(500),
            allowNull: true,   
        },
        rating: {
            type: dataTypes.DECIMAL(3,1).UNSIGNED,
            allowNull: true,
        },
        awards: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            allowNull: true,
        },
        length: {
           type: dataTypes.INTEGER(10).UNSIGNED,
        },
        genre_id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
        },
        release_date: {
            type: dataTypes.DATE,
            allowNull: false,
        }
    }

    const config = {
        tableName: "movies",
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    } 

    const Model = sequelize.define(alias, cols, config)

    return Model;
}