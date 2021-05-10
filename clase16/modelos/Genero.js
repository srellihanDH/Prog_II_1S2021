module.exports = (sequelize, dataTypes) => {

    const Genero = sequelize.define('Genero', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        name: {
            type: dataTypes.STRING
        }
    }, {
        tableName: "genres",
        timestamps: false
    });

    return Genero;
}
