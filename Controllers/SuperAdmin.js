const User = require("../Models/User");
const Pandit = require("../Models/Pandit");

exports.getDetailsSuper = async (req, res) => {
  try {
    const id = req.user.id;
    const details = await User.findById(id);
    if (details) {
      res.status(200).json({
        success: true,
        message: "Details fetched Successfully",
        data: details,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "SuperAdmin Details fetch error",
      error: err.message,
    });
  }
};

exports.updateDetailsSuper = async (req, res) => {
  try {
    const { name, email, phone } = req.body;

    if (!name || !email || !phone) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const id = req.user.id;

    const updatedDetails = await User.findByIdAndUpdate(
      id,
      { name, email, phone },
      { new: true, runValidators: true }
    );

    if (!updatedDetails) {
      return res.status(404).json({ message: "User not found." });
    }

    res.status(200).json({
      message: "User details updated successfully.",
      data: updatedDetails,
    });
  } catch (err) {
    console.error(err);

    res.status(500).json({
      message: "An error occurred while updating user details.",
      error: err.message,
    });
  }
};

exports.updatePandit = async (req, res) => {
  try {
    const { name, specialization, experience, contact } = req.body;

    if (!name || !specialization || !experience || !contact) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required." });
    }

    const { id } = req.params;
    console.log(id);

    const updatedDetails = await Pandit.findByIdAndUpdate(
      id,
      {
        name,
        specialization,
        experience,
        contact,
      },
      { new: true, runValidators: true }
    );

    if (!updatedDetails) {
      return res
        .status(404)
        .json({ success: false, message: "Pandit not found." });
    }

    res.status(200).json({
      success: true,
      message: "Pandit updated successfully.",
      data: updatedDetails,
    });
  } catch (err) {
    console.error("Error updating Pandit:", err);
    res.status(500).json({ success: false, message: "Internal server error." });
  }
};
