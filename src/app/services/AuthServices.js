const bcrypt = require("bcrypt");

const User = require("../model/User");

const registerServices = async (req) => {
  try {
    const { name, email, password } = req.body;

    // generating password hash
    const hashedPassword = await bcrypt.hash(password, 10);

    // creating new user
    try {
      const newUser = await User.create({
        name,
        email,
        password: hashedPassword,
      });

      return { success: true, data: newUser };
    } catch (error) {
      return { error };
    }
  } catch (error) {
    return { error };
  }
};

module.exports = { registerServices };
