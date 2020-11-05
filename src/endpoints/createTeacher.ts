import { Request, Response } from "express";
import {
  validateBody,
  validateEmail,
  validateExpertises
} from "../functions/validations";
import { signUpTeacher } from "../types";
import {
  insertTeacher,
  insertExpertise,
  insertTeacherExpertiseRelation
} from "../data/insertTeacher";

export const createTeacher = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { name, email, birthDate, expertises } = req.body;
    await validateBody({ name, email, birthDate, expertises });

    validateEmail(email);
    validateExpertises(expertises);

    const input: signUpTeacher = {
      name,
      email,
      birthDate,
      expertises
    };

    await insertTeacher(input);
    await insertExpertise(expertises);
    await insertTeacherExpertiseRelation(input);

    res.status(200).send("Novo professor criado");
  } catch (error) {
    if (error.sqlMessage && error.sqlMessage.includes(`for key 'email'`)) {
      res.send("Este email já está cadastrado!");
    }
    res.send(error.message);
  }
};
