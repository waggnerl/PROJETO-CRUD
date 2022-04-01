import Sequelize, { Model } from "sequelize";

export default class Cadastros extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: {
          type: Sequelize.STRING,
          defaultValue: "",
        },
        cpf: {
          type: Sequelize.STRING,
          defaultValue: "",
          unique: {
            msg:"Cadastro já existe"
          }
        }
      },
      {
        sequelize,
      }
    );
    return this;
  }

  
}
