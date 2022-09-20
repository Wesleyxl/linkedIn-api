module.exports = {
  development: {
    username: "root",
    password: null,
    database: "linkedin_api",
    host: "127.0.0.1",
    dialect: "mysql",
    define: {
      timestamps: true,
      underscored: true,
    },
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
    define: {
      timestamps: true,
      underscored: true,
    },
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql",
    define: {
      timestamps: true,
      underscored: true,
    },
  },
};
