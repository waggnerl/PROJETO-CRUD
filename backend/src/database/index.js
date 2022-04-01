import { Sequelize } from "sequelize";
import databaseConfig from "../config/database";
import Cadastros from "../models/Cadastro";

const models = [Cadastros];
const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
models.forEach(
  (model) => model.associate && model.associate(connection.models)
);
