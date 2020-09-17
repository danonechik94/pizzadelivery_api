const { Sequelize } = require('sequelize');
const path = require('path');

const { init: initModels } = require('./models');

const sequelizeInstance = new Sequelize({
    dialect: 'sqlite',
    storage: path.join(__dirname, 'data', 'database.db')
});

initModels(sequelizeInstance);

(async () => {
    // Test the connection upon initialization
    try {
        await sequelizeInstance.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})();


module.exports = sequelizeInstance;