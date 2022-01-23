import { Request, Response } from "express";
import { getProjectsInfo } from "../../Util/MongoConnect";
import { about } from "../../Constants/constants";
export const getInfoAbout = async (
  req: Request,
  res: Response
): Promise<void> => {
  const obj: about = await getProjectsInfo();
  res.status(200).json(obj);
};
