const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, "jw9w8ehndo3w");
    const userId = decodedToken.userId;
    if (req.body.userId && req.body.userId !== userId) {
      res.status(501).json({
        error: new Error("Invalid user id"),
      });
    }
    next();
  } catch {
    res.status(501).json({
      error: new Error("Invalid request!"),
    });
  }
};
