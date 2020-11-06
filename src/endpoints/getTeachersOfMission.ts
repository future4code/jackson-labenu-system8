import { Request, Response } from "express";
import { checkForMissionId } from "../functions/validations";
import { convertDateFormatToUser } from "../functions/dateFunctions";
import { selectTeachersWhereMissionIdIs } from "../data/selectTeacher";

export const getTeachersOfMission = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const missionId: number = Number(req.params.missionId);
    await checkForMissionId(missionId);

    const teachers: any[] = await selectTeachersWhereMissionIdIs(missionId);

    const response = teachers.map(teacher => {
      return {
        id: teacher.id,
        name: teacher.name,
        email: teacher.email,
        birthDate: convertDateFormatToUser(teacher.birthDate)
      };
    });

    res.status(200).send(response);
  } catch (error) {
    res.send(error.message);
  }
};
