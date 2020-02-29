module.exports = (sequelize, DataTypes) => {
    const RecipeStep = sequelize.define('RecipeStep', {
    }, {
        freezeTableName: true
    })

    return RecipeStep
}