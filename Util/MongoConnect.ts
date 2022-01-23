import { MongoClient } from "mongodb";
import { MONGO_OBJ, MONGO_URL, about } from "../Constants/constants";

export const getProjectsInfo = async (): Promise<about> => {
  try {
    const mongo = new MongoClient(MONGO_URL, MONGO_OBJ);
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
  } catch (e) {
    return { name: "", u: "", degree: "", city: "", parla: "" };
  }
};
