import { connection } from "../index";

export async function updateTeacherMissionId(
  teacherId: number,
  missionId: number
): Promise<void> {
  await connection
    .where("id", "=", teacherId)
    .update({
      missionId: missionId
    })
    .into("Lab_Teacher");
}
