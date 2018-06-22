let jwt = require("jsonwebtoken");
let credentials = require("../config/credentials");

exports.isAuthenticated = function(req, res, next) {
  console.info("Entered Authentication Middleware");
  if (req.headers && req.headers.authorization) {
    console.log("Found Authorization Header");
    JWTToken = req.headers.authorization.split(" ");
    if (JWTToken[0] === "Bearer") {
      console.log("Found Bearer Prefix");
      jwt.verify(JWTToken[1], credentials.JWTSecret, function(err, decode) {
        if (err) {
          console.log("Error while Verifying the Token");
          console.error(err);
          res.status(401);
          res.json({
            message: "Invalid Token."
          });
        } else {
          console.log("Token Verified and Decoded Successfully");
          next();
        }
      });
    } else {
      console.log("Didn't find Bearer Prefix");
      res.status(401);
      res.json({
        message: "Missing Correct Token Prefix."
      });
    }
  } else {
    console.log("Didn't Find Authorization Header");
    res.status(401);
    res.json({
      message: "Missing Authorization Token."
    });
  }
};
