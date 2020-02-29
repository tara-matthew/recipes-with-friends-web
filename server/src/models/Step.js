module.exports = (sequelize, DataTypes) => {
    const Step = sequelize.define('Step', {
        title: DataTypes.STRING,
    }, {
        freezeTableName: true
    })

    Step.associate = function(models) {
        Step.belongsToMany(models.Recipe, { through: 'RecipeStep'})
    }

    return Step
}