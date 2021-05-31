module.exports = (sequelize, dataTypes) => {
    
    const Perro = sequelize.define('Perro', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        nombre: {
            type: dataTypes.STRING
        },
        raza_id: {
            type: dataTypes.INTEGER
        },
        color_id: {
            type: dataTypes.INTEGER
        },
    }, {
        tableName: "perros",
        timestamps: false
    });

    Perro.associate = (db) => {
        Perro.belongsTo(db.Raza, {
            as: 'raza',
            foreignKey: 'raza_id'
        });

        Perro.belongsTo(db.Color, {
            as: 'color',
            foreignKey: 'color_id'
        });
    };

    return Perro;
}
