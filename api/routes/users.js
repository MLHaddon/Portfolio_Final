const express = require("express");
const User = require("../models/user");

const router = express.Router();

// Route to get all users
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).send("Error fetching users");
  }
});

// Route to get a single user by ID
router.get("/:userId", async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    if (!user) return res.status(404).send("User not found");
    res.json(user);
  } catch (error) {
    res.status(500).send("Error fetching user");
  }
});

// Route to create a new user
router.post("/", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });
  try {
    const savedUser = await newUser.save();
    res.json(savedUser);
  } catch (error) {
    res.status(500).send("Error saving user");
  }
});

// Route to update an existing user
router.put("/:userId", async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.userId,
      {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
      },
      { new: true }
    );
    if (!updatedUser) return res.status(404).send("User not found");
    res.json(updatedUser);
  } catch (error) {
    res.status(500).send("Error updating user");
  }
});

// Route to delete an existing user
router.delete("/:userId", async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndRemove(req.params.userId);
    if (!deletedUser) return res.status(404).send("User not found");
    res.json(deletedUser);
  } catch (error) {
    res.status(500).send("Error deleting user");
  }
});

module.exports = router;
