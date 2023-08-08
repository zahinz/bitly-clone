import { DataTypes } from "sequelize";
import postgresConnection from "../connection";
import User from "./User";

const Link = postgresConnection.define(
  "Link",
  {
    slug: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    link: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    visit_counts: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
  },
  {
    timestamps: true,
    underscored: true,
    paranoid: true,
  }
);

Link.belongsTo(User, {
  foreignKey: "owner",
});

export default Link;
