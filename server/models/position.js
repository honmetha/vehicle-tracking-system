module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    "Position",
    {
      latitude: DataTypes.STRING,
      longitude: DataTypes.STRING,
    },
    {
      tableName: "positions",
      timestamps: true,
    }
  );
  model.associate = (models) => {
    model.belongsTo(models.User, {
      foreignKey: "user_id"
    });
  };

  return model;
};