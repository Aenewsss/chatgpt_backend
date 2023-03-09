const express = require('express');
const cors = require('cors');

require('dotenv').config();

class AppController {
    express: any
    
    constructor() {
        this.express = express();
        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.express.use(express.json());
        this.express.use(cors());
    }

    routes(){
        this.express.use(require('./routes/routes'));
    }
}

module.exports = new AppController().express;