module.exports = (sequelize) => {
    const Bookmark = sequelize.define('Bookmark', {})

    Bookmark.associate = function(models) {
        Bookmark.belongsTo(models.Recipe)
        Bookmark.belongsTo(models.User)
    }

    return Bookmark
}
