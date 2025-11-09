import { Router } from "express";
import Enquiry from "../models/Enquiry.js";

const r = Router();

// Save enquiry
r.post("/", async (req, res) => {
  try {
    const saved = await Enquiry.create(req.body);
    res.json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all (for admin)
r.get("/", async (req, res) => {
  const list = await Enquiry.find().sort({ createdAt: -1 });
  res.json(list);
});

export default r;
