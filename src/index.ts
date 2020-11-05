import { AddressInfo } from "net";
import express, { Express } from "express";
import cors from "cors";
import knex from "knex";
import dotenv from "dotenv";

import { createStudent } from "./endpoints/createStudent";
import { createTeacher } from "./endpoints/createTeacher";
import { createMission } from "./endpoints/createMission";

dotenv.config();
export const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
  }
});

const app: Express = express();
app.use(express.json());
app.use(cors());

app.post("/student/new", createStudent);
app.post("/teacher/new", createTeacher);
app.post("/mission/new", createMission);

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
