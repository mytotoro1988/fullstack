require("dotenv").config();
import "reflect-metadata";
import express from "express";
import { createConnection } from "typeorm";
import { User } from "./entities/User";

const main = async () => {
  await createConnection({
    type: "postgres",
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: "reddit",
    logging: true,
    synchronize: true,
    entities: [User],
  });

  const app = express();

  app.listen(4000, () => console.log("server listening on port 4000"));
};

main().catch((err) => console.log(err));
