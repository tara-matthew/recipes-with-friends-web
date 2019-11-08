module.exports = (sequelize, DataTypes) => {
    const Recipe = sequelize.define('Recipe', {
        title: DataTypes.STRING,
        story: DataTypes.TEXT

    })

    return Recipe
}
