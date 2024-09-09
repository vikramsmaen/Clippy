import mongoose from "mongoose";

const clipSchema = new mongoose.Schema(
  {
    clipContent: {
      type: String,
    },
  },
  { timestamps: true }
);

const Clip = mongoose.model("Clip", clipSchema);

export default Clip;
