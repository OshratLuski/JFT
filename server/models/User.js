import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "please provide a name"],
    minlength: 3,
    maxlength: 124,
    trim: true,
  },
  email: {
    type: String,
    required: [true, "please provide an email"],
    validate: {
      validator: validator.isEmail,
      message: "Please provide an email address",
    },
    unique: true,
  },
  password: {
    type: String,
    required: [true, "please provide a password"],
    minlength: 6,
    select: false,
  },
  lastName: {
    type: String,
    maxlength: 124,
    trim: true,
    default: "lastName",
  },
  location: {
    type: String,
    maxlength: 124,
    trim: true,
    default: "my city",
  },
});

UserSchema.pre("save", async function () {
  if (!this.isModified("password")) return;
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

UserSchema.methods.createJWT = function () {
  return jwt.sign({ userId: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_LIFETIME,
  });
};
UserSchema.methods.comparePassword = async function (providedPassword) {
  const IsMatch = await bcrypt.compare(providedPassword, this.password);
  return IsMatch;
};

export default mongoose.model("User", UserSchema);
