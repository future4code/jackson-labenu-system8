import { Request, Response } from "express";
import { checkForMissionId } from "../functions/validations";
import { selectStudentsWhereMissionIdIs } from "../data/selectStudent";
import { convertDateFormatToUser } from "../functions/dateFunctions";

export const getStudentsOfMission = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const missionId: number = Number(req.params.missionId);
    await checkForMissionId(missionId);

    const students: any[] = await selectStudentsWhereMissionIdIs(missionId);

    const response = students.map(student => {
      return {
        id: student.id,
        name: student.name,
        email: student.email,
        birthDate: convertDateFormatToUser(student.birthDate),
        hobbies: JSON.parse(student.hobbies)
      };
    });

    res.status(200).send(response);
  } catch (error) {
    res.send(error.message);
  }
};
