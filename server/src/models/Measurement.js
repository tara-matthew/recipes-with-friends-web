module.exports = (sequelize, DataTypes) => {
    const Measurement = sequelize.define('Measurement', {
        title: DataTypes.STRING,
    }, {
        freezeTableName: true
    })

    Measurement.associate = function(models) {
        Measurement.belongsTo(models.RecipeIngredient)
    }

    return Measurement
}