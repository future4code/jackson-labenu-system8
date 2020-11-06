import { connection } from "../index";
import { signUpTeacher } from "../types";
import { convertDateFormatToDatabase } from "../functions/dateFunctions";

// Insere o professor na tabela:
export const insertTeacher = async (teacher: signUpTeacher): Promise<void> => {
  const { name, email, birthDate } = teacher;
  await connection
    .insert({
      name,
      email,
      birthDate: convertDateFormatToDatabase(birthDate)
    })
    .into("Lab_Teacher");
};

// Insere o professor e suas especialidades na tabela relacional:
export const insertTeacherExpertiseRelation = async (
  teacher: signUpTeacher
) => {
  const teacherIdData = await connection.raw(
    `SELECT id FROM Lab_Teacher WHERE email = "${teacher.email}"`
  );
  const teacherId = teacherIdData[0][0].id;

  for (let i = 0; i < teacher.expertises.length; i++) {
    const expertisesIdData = await connection.raw(
      `SELECT id FROM Lab_Expertise WHERE name = "${teacher.expertises[i]}"`
    );
    const expertiseId = expertisesIdData[0][0].id;

    await connection
      .insert({
        teacherId,
        expertiseId
      })
      .into("Lab_TeacherExpertise");
  }
};
