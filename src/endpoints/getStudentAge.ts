import { Request, Response } from "express";
import { selectStudentAge } from "../data/selectStudent";
import { validateBody, checkForStudentId } from "../functions/validations";

export const getStudentAge = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const studentId: number = Number(req.query.studentId);
    await validateBody({ studentId });
    await checkForStudentId(studentId);

    const { age } = await selectStudentAge(studentId);

    const response = {
      age: Math.trunc(age)
    };

    res.status(200).send(response);
  } catch (error) {
    res.send(error.message);
  }
};
