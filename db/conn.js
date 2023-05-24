const {Sequelize} = require('sequelize')
const sequelize= new Sequelize('nodesequelize2','root','32410358',{
        host: 'localhost',
        dialect: 'mysql'
})


module.exports = sequelize