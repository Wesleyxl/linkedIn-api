const bcrypt = require("bcrypt");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Users", [
      {
        name: "Wesley Alves",
        email: "wesley.alvesxll@gmail.com",
        career: "Programador",
        password: await bcrypt.hash("teste@123", 10),
        image:
          "http://localhost:8000/storage/public/images/users/wesley-img.png",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Steve Jobs",
        email: "steve.jobs@gmail.com",
        career: "CEO Apple",
        password: await bcrypt.hash("teste@123", 10),
        image:
          "http://localhost:8000/storage/public/images/users/steve-img.png",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Elon Musk",
        email: "elon.musk@gmail.com",
        career: "CEO SpaceX",
        password: await bcrypt.hash("teste@123", 10),
        image: "http://localhost:8000/storage/public/images/users/elon-img.png",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Ryan Roslansky",
        email: "ryan.roslansky@gmail.com",
        career: "CEO LinkedIn",
        password: await bcrypt.hash("teste@123", 10),
        image: "http://localhost:8000/storage/public/images/users/ryan-img.png",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
