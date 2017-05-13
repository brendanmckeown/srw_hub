module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    allowNull: false
  }, {
    classMethods: {
      associate: (models) => {
        User.belongsTo(models.Role, {
          foreignKey: 'roleId',
          onDelete: 'SET NULL',
        });
      }
    }
  });
  return User;
};