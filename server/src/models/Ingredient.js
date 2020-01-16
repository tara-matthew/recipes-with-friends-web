module.exports = (sequelize, DataTypes) => {
    const Ingredient = sequelize.define('Ingredient', {
        title: DataTypes.STRING,
    }, {
        freezeTableName: true
    })

    Ingredient.associate = function(models) {
        Ingredient.belongsToMany(models.Recipe, { through: 'RecipeIngredient'})
    }

    return Ingredient
}
