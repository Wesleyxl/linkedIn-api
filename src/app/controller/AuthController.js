const register = async (req, res) => {
  try {
    return res.json({ status: "AuthController register" });
  } catch (error) {
    return res.status(400).json({ error });
  }
};

module.exports = { register };
