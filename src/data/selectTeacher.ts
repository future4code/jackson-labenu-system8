import { connection } from "../index";
import { Teacher } from "../types";

export async function selectAllTeachers(): Promise<Teacher[]> {
  try {
    const result = await connection.select().from("Lab_Teacher");
    return result;
  } catch (error) {
    return [];
  }
}

export async function selectTeacherWhereIdIs(teacherId: number): Promise<any> {
  const result = await connection
    .where("id", teacherId)
    .select()
    .from("Lab_Teacher");
  return result[0];
}

export async function selectTeachersWhereMissionIdIs(
  missionId: number
): Promise<any> {
  const result = await connection
    .where("missionId", missionId)
    .select()
    .from("Lab_Teacher");

  return result;
}
