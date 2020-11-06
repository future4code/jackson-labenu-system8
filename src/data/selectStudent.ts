import { connection } from "../index";
import { Student } from "../types";

export async function selectAllStudents(): Promise<Student[]> {
  try {
    const result = await connection.select().from("Lab_Student");
    return result;
  } catch (error) {
    return [];
  }
}

export async function selectStudentWhereIdIs(studentId: number): Promise<any> {
  const result = await connection
    .where("id", studentId)
    .select()
    .from("Lab_Student");

  return result[0];
}

export async function selectStudentsWhereMissionIdIs(
  missionId: number
): Promise<any> {
  const result = await connection
    .where("missionId", missionId)
    .select()
    .from("Lab_Student");

  return result;
}

export async function selectStudentAge(studentId: number): Promise<any> {
  const result = await connection.raw(
    `SELECT DATEDIFF(CURDATE(), birthDate) /365 as age FROM Lab_Student WHERE ID = ${studentId};`
  );

  return result[0][0];
}
