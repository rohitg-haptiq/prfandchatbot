const express = require("express");
const jwt = require("jsonwebtoken");
const Partner = require("../models/registerModel");

const jwt_secrete_key = "partnerreferalsystem";

profileController = async (req, res) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");

    if (!token) {
      return res.status(401).json({ error: " add Authorization token" });
    }

    const decoded = jwt.verify(token, jwt_secrete_key);
    const userId = decoded.id;

    console.log(userId);

    if (!userId) {
      return res.status(400).json({ error: "user ID not found in token" });
    }
    const partner = await Partner.findOne({
      where: {
        id: userId,
      },
    });

    if (!partner) {
      res.status(400).json({
        error: "User Id not found in db",
      });
    }

    res.status(200).json({
      firstName: partner.firstName,
      lastName: partner.lastName,
      email: partner.email,
      mobileNo: partner.mobileNo,
    });
  } catch (error) {
    res.status(500).json({
      massage: "sever error",
      err: error,
    });
    console.log(error);
  }
};

module.exports = profileController;
