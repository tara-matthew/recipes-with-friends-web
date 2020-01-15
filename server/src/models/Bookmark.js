module.exports = (sequelize) => {
    const Bookmark = sequelize.define('Bookmark', {},
    {
        freezeTableName: true
    })

    Bookmark.associate = function(models) {
        Bookmark.belongsTo(models.Recipe)
        Bookmark.belongsTo(models.User)
    }

    return Bookmark
}
