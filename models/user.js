'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };

  User.init({
	  id: {
		  type: DataTypes.INTEGER,
		  primaryKey: true
	  },
	  name: DataTypes.STRING
  }, {
	timestamps: false,
        createdAt: false,
        updatedAt: false,
        deletedAt: false,
    	sequelize,
    	modelName: 'User',
  });
  return User;
};
