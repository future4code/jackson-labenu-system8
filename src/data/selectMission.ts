import { connection } from "../index";

export async function selectMissionWhereIdIs(missionId: number): Promise<any> {
  const result = await connection
    .where("id", missionId)
    .select()
    .from("Lab_Mission");
  return result[0];
}
