module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define('Role', {
    title: DataTypes.STRING,
    allowNull: false
  }, {
    classMethods: {
      associate: (models) => {
        Role.hasMany(models.User, {
          foreignKey: 'roleId',
          as: 'users',
        });
      }
    }
  });
  return Role;
};
