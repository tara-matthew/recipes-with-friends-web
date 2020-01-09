module.exports = (sequelize) => {
    const History = sequelize.define('History', {})

    History.associate = function(models) {
        History.belongsTo(models.Recipe)
    }

    return History
}
