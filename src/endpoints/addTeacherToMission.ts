import { Request, Response } from "express";
import {
  validateBody,
  checkForMissionId,
  checkForTeacherId
} from "../functions/validations";
import { updateTeacherMissionId } from "../data/updateTeacher";

export const addTeacherToMission = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const teacherId: number = Number(req.query.teacherId);
    const missionId: number = Number(req.query.missionId);
    await validateBody({ teacherId, missionId });

    await checkForTeacherId(teacherId);
    await checkForMissionId(missionId);

    await updateTeacherMissionId(teacherId, missionId);
    res.status(200).send("Professor inserido na turma!");
  } catch (error) {
    res.send(error.message);
  }
};
