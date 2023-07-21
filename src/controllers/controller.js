const User = require('../models/dbschema');

const userController = {
  getAllUsers: async (req, res) => {
    try {
      const users = await User.findAll();
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  getUserById: async (req, res) => {
    const userId = req.params.id;
    try {
      const user = await User.findByPk(userId);
      if (user) {
        res.json(user);
      } else {
        res.status(404).json({ message: 'User not found.' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  createUser: async (req, res) => {
    const userData = req.body;
    try {
        console.log(userData)
      const newUser = await User.create(userData);
      res.json(newUser);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  updateUser: async (req, res) => {
    const userId = req.params.id;
    const userData = req.body;
    try {
      await User.update(userData, { where: { id: userId } });
      const updatedUser = await User.findByPk(userId);
      res.json(updatedUser);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  deleteUser: async (req, res) => {
    const userId = req.params.id;
    try {
      await User.destroy({ where: { id: userId } });
      res.json({ message: 'User deleted successfully.' });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};

module.exports = userController;
