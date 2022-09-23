const bcrypt = require("bcrypt");

const User = require("../model/User");
const createUserToken = require("../../helpers/createUserToken");

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

      return {
        success: true,
        data: {
          user: {
            id: newUser.id,
            name: newUser.name,
            email: newUser.email,
            image: newUser.image,
          },
          access_token: createUserToken(newUser.id),
        },
      };
    } catch (error) {
      return { error };
    }
  } catch (error) {
    return { error };
  }
};

const loginServices = async (req) => {
  try {
    const { email, password } = req.body;

    // find user
    const userExist = await User.findOne(
      { where: { email } },
      { attributes: ["id", "email", "name", "image", "password"] }
    );

    // verify if user exists
    if (!userExist) {
      return { error: "email or password is incorrect" };
    }

    // validating password
    const isCorrectPassword = await bcrypt.compare(
      password,
      userExist.password
    );

    // return password errors
    if (!isCorrectPassword) {
      return { error: "email or password is incorrect" };
    }

    return {
      success: true,
      data: {
        user: {
          id: userExist.id,
          name: userExist.name,
          email: userExist.email,
          image: userExist.image,
        },
        access_token: createUserToken(userExist.id),
      },
    };
  } catch (error) {
    return { error };
  }
};

const meServices = async (id) => {
  const user = await User.findByPk(id, {
    attributes: { exclude: "password" },
  });

  if (!user) {
    return { error: "user not found" };
  }

  return { data: user };
};

module.exports = { registerServices, loginServices, meServices };
