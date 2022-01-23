import express from "express";
const app = express();
import cors from "cors";
import { getInfoAbout } from "./api/controllers/about";
app.use(express.json());
app.use(cors());

app.get("/david", getInfoAbout);

app.listen(process.env.PORT || 3000);
