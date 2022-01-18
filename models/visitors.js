import mongoose from "mongoose";

const schema = {
  date: Date,
  name: String,
};

export const Visitor = mongoose.model("Visitor",schema,"Visitor");

