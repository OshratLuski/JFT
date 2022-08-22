import mongoose from "mongoose";

const JobSchema = new mongoose.Schema(
  {
    studyProfessional: {
      type: String,
      required: [true, "please provide a position"],
      maxlength: 100,
    },
    teacherIn: {
      type: String,
      enum: [
        "high school",
        "middle school",
        "elementary school",
        "kindergarten",
      ],
      default: "elementary school",
    },
    status: {
      type: String,
      enum: ["pending", "interview", "declined"],
      default: "pending",
    },
    jobType: {
      type: String,
      enum: ["full-time", "part-time", "remote", "internship"],
      default: "full-time",
    },
    jobLocation: {
      type: String,
      default: "my city",
      required: true,
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "Please provide a user"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Job", JobSchema, "jobs");
