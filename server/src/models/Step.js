module.exports = (sequelize, DataTypes) => {
    const Steps = sequelize.define('Steps', {
        title: DataTypes.STRING,
    }, {
        freezeTableName: true
    })

    Ingredient.associate = function(models) {
        Ingredient.belongsToMany(models.Recipe, { through: 'RecipeIngredient'})
    }

    return Ingredient
}