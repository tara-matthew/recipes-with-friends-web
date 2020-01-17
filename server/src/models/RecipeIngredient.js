module.exports = (sequelize, DataTypes) => {
    const RecipeIngredient = sequelize.define('RecipeIngredient', {
    }, {
        freezeTableName: true
    })

    return RecipeIngredient
}
