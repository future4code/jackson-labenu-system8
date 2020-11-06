import { Request, Response } from "express";
import { signUpMission } from "../types";
import { validateBody } from "../functions/validations";
import { insertMission } from "../data/insertMission";

export const createMission = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { name, startDate, endDate, module } = req.body;
    await validateBody({ name, startDate, endDate });

    const input: signUpMission = {
      name,
      startDate,
      endDate,
      module: module ? module : undefined
    };

    await insertMission(input);
    res.status(200).send("Nova turma criada");
  } catch (error) {
    res.send(error.message);
  }
};
