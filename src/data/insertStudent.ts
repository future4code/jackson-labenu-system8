import { connection } from "../index";
import { signUpStudent } from "../types";
import { convertDateFormatToDatabase } from "../functions/dateFunctions";

// Insere o estudante na tabela:
export const insertStudent = async (student: signUpStudent): Promise<void> => {
  const { name, email, birthDate, hobbies } = student;
  await connection
    .insert({
      name,
      email,
      birthDate: convertDateFormatToDatabase(birthDate),
      hobbies: JSON.stringify(hobbies)
    })
    .into("Lab_Student");
};
