// const Sequelize = require('sequelize')

// const dotenv = require("dotenv");
// const { BOOLEAN } = require('sequelize');
// dotenv.config();

// const db = new Sequelize({
//   dialect: "mysql",
//   database: process.env.database, 
//   username: process.env.username,
//   password: process.env.password
// // });

// // const aca =  db.define('Academy' , {
// //     Id : {
// //         type : Sequelize.INTEGER,
// //         primaryKey : true,
// //         autoIncrement: true,
// //     },
// //     Name : {
// //         type : Sequelize.STRING
// //     },
// //     Price : {
// //         type : Sequelize.STRING
// //     },
// //     Players : {
// //         type : Sequelize.INTEGER
// //     },
// //     Open : {
// //         type : Sequelize.BOOLEAN
// //     }
// // })

// // module.exports = {db,aca}
// const data = {
//     {
//             "Id" = 1,
//             "Name" =  "Academy A",
//             "Open" =  true,
//             "Price" =  "$40",
//             "Players" =  4,
//         },

//         {
//             "Id" =  2,
//             "Name" =  "Academy B",
//             "Open" = false,
//             "Price" =  "$60",
//             "Players" =  2,
           
//         },
//         {
//             "Id": 3,
//             "Name": "Academy C",
//             "Open": true,
//             "Price": "$40",
//             "Players": 4
//         }
          
// }


const a = [
    {
        "Id": 1,
        "Name": "Academy A",
        "Open": true,
        "Price": "$40",
        "Players": 4,
        "createdAt": "2021-03-10T17:07:58.000Z",
        "updatedAt": "2021-03-10T17:07:58.000Z"
    },
    {
        "Id": 2,
        "Name": "Academy B",
        "Open": false,
        "Price": "$60",
        "Players": 2,
        "createdAt": "2021-03-10T17:08:30.000Z",
        "updatedAt": "2021-03-10T17:08:30.000Z"
    },
    {
        "Id": 3,
        "Name": "Academy C",
        "Open": true,
        "Price": "$40",
        "Players": 4,
    }]

    module.exports = {a}