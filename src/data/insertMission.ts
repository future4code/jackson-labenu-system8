import { connection } from "../index";
import { signUpMission } from "../types";
import { convertDateFormatToDatabase } from "../functions/dateFunctions";

export const insertMission = async (mission: signUpMission): Promise<void> => {
  const { name, startDate, endDate, module } = mission;
  await connection
    .insert({
      name,
      startDate: convertDateFormatToDatabase(startDate),
      endDate: convertDateFormatToDatabase(endDate),
      module
    })
    .into("Lab_Mission");
};
