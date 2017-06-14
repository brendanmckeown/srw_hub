module.exports = (sequelize, DataTypes) => {
  const WeeklySummary = sequelize.define('WeeklySummary', {
    jobSatisfactionScore: {
      type: DataTypes.INTEGER
    }
  }, {
    classMethods: {
      associate: (models) => {
        WeeklySummary.belongsTo(models.User, {
          foreignKey: 'userId',
          onDelete: 'CASCADE',
        })
      }
    }
  });
  return WeeklySummary;
};