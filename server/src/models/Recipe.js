module.exports = (sequelize, DataTypes) => {
    const Recipe = sequelize.define('Recipe', {
        title: DataTypes.STRING,
        story: DataTypes.TEXT,
        ingredients: DataTypes.TEXT,
        mainPhoto: DataTypes.STRING

    })

    return Recipe
}
