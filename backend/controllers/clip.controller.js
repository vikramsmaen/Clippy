import Clip from "../models/clip.model.js";
import mongoose from "mongoose";

//

export const getClips = async (req, res) => {
  try {
    const clips = await Clip.find({});
    res.status(200).json({ success: true, data: clips });
  } catch (error) {
    console.log("error in fetching products", error.message);
    res.status(500).json({ success: false, msg: "Server error" });
  }
};

//----------------------------------------------------------------

export const createClip = async (req, res) => {
  const clip = req.body; //user will send this data
  if (!clip.clipContent) {
    return res.status(400).json({ msg: "Clip content is required" });
  }

  const newClip = new Clip(clip);

  try {
    await newClip.save();
    res.status(201).json({ success: true, msg: "Clip saved", data: newClip });
  } catch (error) {
    console.log("Error saving: " + error.message);
    res.status(500).json({ success: false, msg: "Server error" });
  }
};

//----------------------------------------------------------------

export const updateClip = async (req, res) => {
  const { id } = req.params;
  const updatedClip = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ success: false, msg: "Invalid ID" });
  }

  try {
    const clip = await Clip.findByIdAndUpdate(id, updatedClip, { new: true });
    if (!clip) {
      return res.status(404).json({ success: false, msg: "Clip not found" });
    }
    res.status(200).json({ success: true, msg: "Clip updated", data: clip });
  } catch (error) {
    res.status(500).json({ success: false, msg: "Server error" });
    console.log("Error updating the Clip" + error.message);
  }
};

//----------------------------------------------------------------

export const deleteClip = async (req, res) => {
  const { id } = req.params;
  console.log(id);

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ success: false, msg: "Invalid ID" });
  }
  try {
    await Clip.findByIdAndDelete(id);
    res.status(200).json({ success: true, msg: "Clip deleted" });
  } catch (error) {
    res.status(500).json({ success: false, msg: "Clip not found" });
    console.log("Unable to delete the Clip" + error.message);
  }
};
