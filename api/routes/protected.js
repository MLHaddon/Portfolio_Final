const express = require("express");
const jwt = require("jsonwebtoken");

const router = express.Router();

// Middleware function to verify the JSON Web Token
const verifyToken = (req, res, next) => {
  const bearerHeader = req.headers["authorization"];
  if (!bearerHeader) return res.status(401).send("Access denied");
  const bearer = bearerHeader.split(" ");
  const bearerToken = bearer[1];
  try {
    const decoded = jwt.verify(bearerToken, process.env.JWT_SECRET);
    req.userId = decoded.userId;
    next();
  } catch (error) {
    res.status(400).send("Invalid token");
  }
};

// Protected route
router.get("/protected", verifyToken, (req, res) => {
  // Implement your protected route functionality here
  res.send("Access granted");
});

module.exports = router;
