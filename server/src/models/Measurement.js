module.exports = (sequelize, DataTypes) => {
    const Measurement = sequelize.define('Measurement', {
        title: DataTypes.STRING,
    }, {
        freezeTableName: true
    })

    Measurement.associate = function(models) {
        Measurement.hasMany(models.RecipeIngredient)
    }

    return Measurement
}