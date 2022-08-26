const path = require("path");
require("dotenv").config({
    path: path.join(
        __dirname,
        process.env.NODE_ENV ? `../.env.${process.env.NODE_ENV}`.trim() : "../.env"
    ),
});
console.log(`environment ==> ${process.env.NODE_ENV || 'local'}`.trim());
module.exports = {
    port: process.env.PORT,
    database: {
        uri: process.env.DB_URI,
    },
    jwt: {
        secret: process.env.JWT_SECRET,
        expiredIn: process.env.JWT_EXPIRED_IN
    },
  }