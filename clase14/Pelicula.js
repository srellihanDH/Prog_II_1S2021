module.exports = (sequelize, dataTypes) => {

    const Peli = sequelize.define('Pelicula', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        title: {
            type: dataTypes.STRING
        }
    }, {
        tableName: "movies",
        timestamps: false
    });

    return Peli;
}
