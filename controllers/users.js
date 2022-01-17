const { User } = require('../models');

const getUsers = async (req, res) => {
 
  try {
    const data = await User.findAll();
    const users = data.map(({ dataValues: user }) => {
      return user;
    });
    return res
      .json({
        status: 'success',
        data: users,
      })
      .status(200);
  } catch (error) {
    console.log(error);
    return res
      .json({
        status: 'error',
        error: error.message,
      })
      .status(400);
  }
};

exports.getUsers = getUsers;
