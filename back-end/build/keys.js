"use strict";
exports.__esModule = true;
require('dotenv').config();
exports["default"] = {
    database: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME
    }
};
