import mongoose from "mongoose";

const issueSchema = new mongoose.Schema(
  {
    issueKey: {
      type: String,
      required: true,
      unique:true
    },
    summary: {
      type: String,
      required: true,
    },
    issueType: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    assignee: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
export const Issue = mongoose.model("Issue",issueSchema )