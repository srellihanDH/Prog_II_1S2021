
module.exports = (sequelize, dataTypes) => {
    
    const Color = sequelize.define('Color', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        color: {
            type: dataTypes.STRING
        }
    }, {
        tableName: "colores",
        timestamps: false
    });

    Color.associate = (db) => {
        Color.hasMany(db.Perro, {
            as: 'perros',
            foreignKey: 'color_id'
        });
    };

    return Color;
}
