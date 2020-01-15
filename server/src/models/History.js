module.exports = (sequelize) => {
    const History = sequelize.define('History', {},
    {
        freezeTableName: true
    })

    History.associate = function(models) {
        History.belongsTo(models.Recipe)
        History.belongsTo(models.User)
    }

    return History
}
