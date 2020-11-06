import { connection } from "../index";

export async function updateStudentMissionId(
  studentId: number,
  missionId: number
): Promise<void> {
  await connection
    .where("id", "=", studentId)
    .update({
      missionId: missionId
    })
    .into("Lab_Student");
}
