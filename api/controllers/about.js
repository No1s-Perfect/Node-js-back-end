"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getInfoAbout = void 0;
const MongoConnect_1 = require("../../Util/MongoConnect");
const getInfoAbout = async (req, res) => {
    const obj = await (0, MongoConnect_1.getProjectsInfo)();
    res.status(200).json(obj);
};
exports.getInfoAbout = getInfoAbout;
