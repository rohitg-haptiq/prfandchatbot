const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Partner = require("../models/registerModel");

const JWT_SECRET = "partnerreferalsystem";

exports.loginController = async (req, res) => {
  const { email, password } = req.body;

  console.log("*************", email, password);

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  try {
    const partner = await Partner.findOne({ where: { email } });

    if (!partner) {
      return res.status(404).json({ message: "Partner not found" });
    }

    const isPasswordValid = await bcrypt.compare(password, partner.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Create JWT token with the partner's ID
    const token = jwt.sign(
      { id: partner.id, email: partner.email },
      JWT_SECRET,
      { expiresIn: "1h" } // Token expires in 1 hour
    );

    // Send response with the JWT token
    res.status(200).json({
      message: "Login successful",
      token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
