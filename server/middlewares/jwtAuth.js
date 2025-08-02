const jwt = require("jsonwebtoken");
require("dotenv").config();

async function authenticateJWT (req, res, next) {
  const bearerHeader = req.headers['authorization'];

  if (bearerHeader) {
    const bearerToken = bearerHeader.split(" ")[1];

    jwt.verify(bearerToken, JWT_SECRET_KEY, (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }

      req.user = user;
      next();
    });
  } else {
    res.status(401).send({
      message: "401 error!"
    });
  }
}

module.exports = {
  authenticateJWT
}