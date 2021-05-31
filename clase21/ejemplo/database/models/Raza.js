
module.exports = (sequelize, dataTypes) => {
    
    const Raza = sequelize.define('Raza', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        raza: {
            type: dataTypes.STRING
        }
    }, {
        tableName: "razas"
    });

    Raza.associate = (db) => {
        Raza.hasMany(db.Perro, {
            as: 'perros',
            foreignKey: 'raza_id'
        });
    };

    return Raza;
}
