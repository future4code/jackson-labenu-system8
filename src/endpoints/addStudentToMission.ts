import { Request, Response } from "express";
import {
  validateBody,
  checkForStudentId,
  checkForMissionId
} from "../functions/validations";
import { updateStudentMissionId } from "../data/updateStudent";

export const addStudentToMission = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const studentId: number = Number(req.query.studentId);
    const missionId: number = Number(req.query.missionId);
    await validateBody({ studentId, missionId });

    await checkForStudentId(studentId);
    await checkForMissionId(missionId);

    await updateStudentMissionId(studentId, missionId);
    res.status(200).send("Usuário inserido na turma!");
  } catch (error) {
    res.send(error.message);
  }
};
