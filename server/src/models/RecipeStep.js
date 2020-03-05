module.exports = (sequelize, DataTypes) => {
    const RecipeStep = sequelize.define('RecipeStep', {
        photo: DataTypes.STRING
    }, {
        freezeTableName: true
    })

    return RecipeStep
}