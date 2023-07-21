const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./src/routes/router');
const sequelize = require('./src/helpers/helper');

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

// Import and synchronize the Sequelize models
const User = require('./src/models/dbschema');
sequelize.sync();

// Use user routes
app.use('/api', userRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
