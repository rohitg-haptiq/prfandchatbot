const bcrypt = require("bcrypt");
const Partner = require("../models/registerModel");

const { Sequelize } = require("sequelize");

exports.registerController = async (req, res) => {
  const { firstName, lastName, email, mobileNo, password } = req.body;

  // Validate incoming data
  if (!firstName || !lastName || !email || !mobileNo || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    // Check if email or mobile number already exists
    const existingPartner = await Partner.findOne({
      where: { [Sequelize.Op.or]: [{ email }, { mobileNo }] },
    });

    if (existingPartner) {
      return res
        .status(400)
        .json({ message: "Email or Mobile number already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new partner
    const partner = await Partner.create({
      firstName,
      lastName,
      email,
      mobileNo,
      password: hashedPassword,
    });

    res.status(201).json({
      message: "Partner registered successfully",
      partner: {
        id: partner.id,
        firstName: partner.firstName,
        lastName: partner.lastName,
        email: partner.email,
        mobileNo: partner.mobileNo,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
