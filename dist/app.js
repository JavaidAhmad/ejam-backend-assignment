'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const deployment_1 = __importDefault(require("./deployment"));
const app = express_1.default();
app.use(express_1.default.json());
app.use(function (req, res, next) {
    const allowedOrigins = ['http://localhost:3000'];
    const origin = req.headers.origin;
    if (allowedOrigins.indexOf(origin) > -1) {
        res.header("Access-Control-Allow-Origin", origin);
    }
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, DELETE,X-Access-Token");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
});
//Create DB connection
const db_options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};
mongoose_1.default.connect(process.env.DB_URL, db_options, (err) => {
    if (err != null)
        console.log("Connection error:", err);
    else
        console.log('connection created successfully');
});
app.use('/api', deployment_1.default);
app.listen(process.env.PORT, err => {
    if (err) {
        return console.error(err);
    }
    return console.log(`server is listening on ${process.env.PORT}`);
});
//# sourceMappingURL=app.js.map