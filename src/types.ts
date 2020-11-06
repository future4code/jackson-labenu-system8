export type signUpStudent = {
  name: string;
  email: string;
  birthDate: string;
  hobbies: string[];
};

export type signUpTeacher = {
  name: string;
  email: string;
  birthDate: string;
  expertises: EXPERTISES[];
};

export type signUpMission = {
  name: string;
  startDate: string;
  endDate: string;
  module: string | undefined;
};

export type Student = {
  id: number;
  name: string;
  email: string;
  birthDate: string;
  hobbies: string[];
};

export type Teacher = {
  id: number;
  name: string;
  email: string;
  birthDate: string;
  expertises: EXPERTISES[];
};

export type Mission = {
  id: number;
  name: string;
  startDate: string;
  finishDate: string;
  teachers: Teacher[];
  students: Student[];
  currentModule: number | undefined;
};

export enum EXPERTISES {
  REACT = "React",
  REDUX = "Redux",
  CSS = "CSS",
  TESTES = "Testes",
  TYPESCRIPT = "Typescript",
  POAO = "Programação Orientada a Objetos",
  BACKEND = "Backend"
}

export const validExpertises = [
  EXPERTISES.REACT,
  EXPERTISES.REDUX,
  EXPERTISES.CSS,
  EXPERTISES.TESTES,
  EXPERTISES.TYPESCRIPT,
  EXPERTISES.POAO,
  EXPERTISES.BACKEND
];
