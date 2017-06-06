module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Touches', 'duration', Sequelize.INTEGER);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Touches', 'duration');
  }
};
