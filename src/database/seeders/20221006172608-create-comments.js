module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("comments", [
      {
        publication_id: 1,
        user_id: 2,
        text: "Excellent post! I'll consider",
        likes: 0,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        publication_id: 1,
        user_id: 3,
        text: "That's why my business is doing so well ",
        likes: 0,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("comments", null, {});
  },
};
