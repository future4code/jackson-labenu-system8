import { validExpertises } from "../types";

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
