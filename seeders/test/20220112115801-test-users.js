'use strict';

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      'Users',
      [
        {
		id: 1,
          name: 'Luca',
          
	},
        {
		id: 2,
          name: 'LucaLuca',
         
        },
        {
		id: 3,
          name: 'LucaLucaLuca',
         
        },
      ],
      {}
    ),
  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete('Users', null, {}),
};
