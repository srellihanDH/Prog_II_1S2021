module.exports = (sequelize, dataTypes) => {

    const Usuario = sequelize.define('Usuario', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        }, name: {
            type: dataTypes.STRING,
            field: "nombre"
        }, pass: {
            type: dataTypes.STRING,
            field: "contrasena"
        }
    }, {
        tableName: "usuarios",
        timestamps: false
    });

    return Usuario;
}
