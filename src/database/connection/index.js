import { Sequelize } from "sequelize";
import config from "../../config";

const { database, user, password, host, port, ssl } = config.postgres;

export const postgresConnection = new Sequelize(database, user, password, {
  host: host,
  port: port,
  dialect: "postgres",
  logging: config.nodeEnv === "development",
  ssl: ssl,
});

export default postgresConnection;
