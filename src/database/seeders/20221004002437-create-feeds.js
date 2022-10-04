module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("feeds", [
      {
        user_id: 1,
        text: "You have to match the convenience of the gasoline car in order for people to buy an electric car. In order to have clean air in cities, you have to go electric. You should not show somebody something very cool and then not do it. At Tesla, any prototype that is shown to customers, the production must be better.",
        image: "http://localhost:8000/storage/public/images/feeds/feed-1.png",
        likes: 0,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 2,
        text: "As a leader, It is important to not just see your own success, but focus on the success of others. ",
        image: "http://localhost:8000/storage/public/images/feeds/feed-2.png",
        likes: 0,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("feeds", null, {});
  },
};
