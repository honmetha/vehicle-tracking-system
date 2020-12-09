module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    "User",
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      tableName: "users",
      timestamps: false,
    }
  );
  model.associate = (models) => {
    model.hasMany(models.Position, {
      foreignKey: "user_id",
    });
  };

  return model;
};