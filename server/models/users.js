module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    "User",
    {
      name: DataTypes.STRING,
      password: DataTypes.STRING,
      role: {
        type: DataTypes.ENUM('user', 'admin'),
        defaultValue: 'user'
      }
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