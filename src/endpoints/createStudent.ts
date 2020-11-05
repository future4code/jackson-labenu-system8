import { Request, Response } from "express";
import { insertStudent } from "../data/students/insertStudent";
import { signUpStudent } from "../types";
import { validateBody, validateEmail } from "../functions/validations";

export const createStudent = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { name, email, birthDate, hobbies } = req.body;
    await validateBody({ name, email, birthDate, hobbies });
    await validateEmail(email);

    const input: signUpStudent = {
      name,
      email,
      birthDate,
      hobbies
    };

    await insertStudent(input);

    res.status(200).send("Novo estudante criado");
  } catch (error) {
    if (error.sqlMessage && error.sqlMessage.includes(`for key 'email'`)) {
      res.send("Este email já está cadastrado!");
    }
    res.send(error.message);
  }
};
