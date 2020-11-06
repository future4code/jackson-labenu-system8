import { validExpertises } from "../types";
import { selectStudentWhereIdIs } from "../data/selectStudent";
import { selectTeacherWhereIdIs } from "../data/selectTeacher";
import { selectMissionWhereIdIs } from "../data/selectMission";

export async function validateBody(body: {}): Promise<void> {
  const bodyPropertiesNames: string[] = Object.keys(body);
  const bodyValues: string[] = Object.values(body);

  for (let i = 0; i < bodyValues.length; i++) {
    if (!bodyValues[i]) {
      throw new Error(`O campo "${bodyPropertiesNames[i]}" é obrigatório`);
    }
  }
}

export function validateEmail(email: string): void {
  if (!email.includes("@")) {
    throw new Error("Formato de email inválido");
  }
}

export function validateExpertises(expertises: []): void {
  for (let i = 0; i < expertises.length; i++) {
    if (!validExpertises.includes(expertises[i])) {
      throw new Error("Expertise inválida");
    }
  }
}

export async function checkForStudentId(userId: number): Promise<void> {
  const student = await selectStudentWhereIdIs(userId);

  if (!student) {
    throw new Error("Não foi encontrado nenhum estudante com esse ID");
  }
}

export async function checkForTeacherId(teacherId: number): Promise<void> {
  const teacher = await selectTeacherWhereIdIs(teacherId);

  if (!teacher) {
    throw new Error("Não foi encontrado nenhum professor com esse ID");
  }
}

export async function checkForMissionId(missionId: number): Promise<void> {
  const mission = await selectMissionWhereIdIs(missionId);

  if (!mission) {
    throw new Error("Não foi encontrada nenhuma missão com esse ID!");
  }
}
