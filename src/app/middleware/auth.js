const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const token = req.headers.access_token;

  // verify if token exists
  if (!token) {
    return res.status(401).json({ error: "Token is Required" });
  }

  // validating token
  jwt.verify(token, process.env.JWT_SECRET || "secret", (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: "Token is Invalid" });
    }

    // saving token
    res.locals.auth_data = decoded;

    return next();
  });
};

module.exports = auth;
