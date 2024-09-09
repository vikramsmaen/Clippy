import express from "express";

import { getClips, createClip, updateClip, deleteClip } from "../controllers/clip.controller.js";

const router = express.Router();

// Define routes

router.get("/", getClips);

router.post("/", createClip);

router.put("/:id", updateClip);

router.delete("/:id", deleteClip);

export default router;
