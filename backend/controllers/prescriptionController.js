import Prescription from "../models/Prescription.js";
import { extractMedicinesFromImage } from "../utils/geminiApi.js";

export const uploadPrescription = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    // Multer file path
    const filePath = req.file.path;

    // Gemini se medicines extract karna
    const extracted = await extractMedicinesFromImage(filePath);

    // DB me save karna
    const prescription = new Prescription({
      userId: req.body.userId || "demoUser", // agar frontend se aata hai to use kar
      filePath, // yahi required field hai
      medicines: extracted.medicines || [],
    });

    await prescription.save();

    res.status(201).json({
      message: "Prescription uploaded successfully",
      data: prescription,
    });
  } catch (err) {
    console.error("Upload Prescription Error:", err);
    res.status(500).json({ message: "Upload failed", error: err.message });
  }
};
