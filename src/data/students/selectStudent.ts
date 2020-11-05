import { connection } from "../../index";
import { Student } from "../../types";

export async function selectAllStudents(): Promise<Student[]> {
  try {
    const result = await connection.select().from("Lab_Student");
    return result;
  } catch (error) {
    return [];
  }
}
