const { registerServices } = require("../services/AuthServices");

const register = async (req, res) => {
  try {
    // validating fields
    const { name, email, password } = req.body;

    if (!name || name === "") {
      return res.status(400).json({ error: "the name field is required" });
    }
    if (!email || email === "") {
      return res.status(400).json({ error: "the email field is required" });
    }
    if (!password || password === "") {
      return res.status(400).json({ error: "the password field is required" });
    }

    // service
    const response = await registerServices(req);

    if (response.error) {
      return res.status(400).json({ error: response.error });
    }

    return res.json(response.data);
  } catch (error) {
    return res.status(400).json({ error });
  }
};

const login = async (req, res) => {
  try {
    // validating fields
    const { email, password } = req.body;

    if (!email || email === "") {
      return res.status(400).json({ error: "the email field is required" });
    }
    if (!password || password === "") {
      return res.status(400).json({ error: "the password field is required" });
    }

    return res.json("AuthController login");
  } catch (error) {
    return res.status(400).json({ error });
  }
};

module.exports = { register, login };
