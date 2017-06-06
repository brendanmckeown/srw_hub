module.exports = (sequelize, DataTypes) => {
  const Touch = sequelize.define('Touch', {
    pressureValue: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    classMethods: {
      associate: (models) => {
        Touch.belongsTo(models.User, {
          foreignKey: 'userId',
          onDelete: 'CASCADE',
        })
      }
    }
  });
  return Touch;
};
