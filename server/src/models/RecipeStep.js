module.exports = (sequelize, DataTypes) => {
    const RecipeStep = sequelize.define('RecipeStep', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        photo: DataTypes.STRING
    }, {
        freezeTableName: true
    })

    return RecipeStep
}