module.exports = (sequelize, DataTypes) => {
    const Recipe = sequelize.define('Recipe', {
        title: DataTypes.STRING,
        story: DataTypes.TEXT,
        mainPhoto: DataTypes.STRING,
        method: DataTypes.JSON
    }, {
        freezeTableName: true
    })

    Recipe.associate = function(models) {
        Recipe.belongsToMany(models.Ingredient, { through: 'RecipeIngredient'})
        Recipe.belongsToMany(models.Step, { through: 'RecipeStep'})
    }

    return Recipe
}
