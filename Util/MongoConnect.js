"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProjectsInfo = void 0;
const mongodb_1 = require("mongodb");
const constants_1 = require("../Constants/constants");
const getProjectsInfo = async () => {
    try {
        const mongo = new mongodb_1.MongoClient(constants_1.MONGO_URL, constants_1.MONGO_OBJ);
        await mongo.connect();
        const aboutMe = mongo.db("myFirstDatabase").collection("about");
        const array = await aboutMe.find().toArray();
        const me = array[0];
        return {
            name: me.name,
            u: me.u,
            degree: me.degree,
            city: me.city,
            parla: me.parla,
        };
    }
    catch (e) {
        return { name: "", u: "", degree: "", city: "", parla: "" };
    }
};
exports.getProjectsInfo = getProjectsInfo;
