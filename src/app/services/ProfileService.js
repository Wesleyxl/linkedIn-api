const Profile = require("../model/Profile");

const showProfileService = async (auth_id) => {
  try {
    const profile = await Profile.findOne({
      where: {
        user_id: auth_id,
      },
    });

    if (!profile) {
      return {
        error: "profile not found",
      };
    }

    return {
      success: true,
      data: profile,
    };
  } catch (error) {
    return {
      error,
    };
  }
};

const createProfileService = async (req, auth_id) => {
  try {
    const { about, country, state, career, experience, education, skill } =
      req.body;

    const profile = await Profile.create({
      about,
      country,
      state,
      career,
      experience,
      education,
      skill,
      user_id: auth_id,
    });

    if (!profile) {
      return {
        error: "something went wrong",
      };
    }

    return {
      success: true,
      data: profile,
    };
  } catch (error) {
    return {
      error,
    };
  }
};

const editProfileService = async (req, auth_id) => {
  try {
    const { about, country, state, career, experience, education, skill } =
      req.body;

    const profile = await Profile.update(
      {
        where: {
          user_id: auth_id,
        },
      },
      {
        about,
        country,
        state,
        career,
        experience,
        education,
        skill,
      }
    );

    if (!profile) {
      return {
        error: "something went wrong",
      };
    }

    return {
      success: true,
      data: profile,
    };
  } catch (error) {
    return {
      error,
    };
  }
};

module.exports = {
  showProfileService,
  createProfileService,
  editProfileService,
};
