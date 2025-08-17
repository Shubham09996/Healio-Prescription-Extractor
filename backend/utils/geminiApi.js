import dotenv from "dotenv";
import fs from "fs";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

// Utility: clean Gemini response to valid JSON
function cleanJSON(text) {
  if (!text || typeof text !== "string") return { medicines: [] };

  text = text.replace(/```(json)?/gi, "").trim();

  try {
    return JSON.parse(text);
  } catch {
    return { medicines: [] };
  }
}

// Extract medicines from prescription image
export async function extractMedicinesFromImage(filePath) {
  try {
    // Image ko base64 me convert karna
    const imageData = fs.readFileSync(filePath).toString("base64");

    const prompt = `
You are a highly accurate medical prescription parsing assistant.

Input: Raw OCR text from a scanned handwritten prescription.

Your Goal:
Extract ONLY the medicine details (ignore everything else) and return in strict JSON format.

Output Format (strictly JSON):
{
  "medicines": [
    { "name": "MedicineName", "dosage": "DosageStrength", "frequency": "How many times a day / when to take" }
  ]
}

Parsing Rules:
1. Ignore unrelated text like hospital/doctor/patient info, dates, lab tests, investigations, or general instructions.
2. Medicine name must be valid and recognizable. Skip incomplete or unclear names.
3. Normalize dosage units (mg, g, ml, IU, tablet, capsule, injection).
4. Decode common prescription abbreviations:
   - OD → once a day
   - BD → 2 times a day
   - TDS → 3 times a day
   - QID → 4 times a day
   - HS → at bedtime
   - SOS / PRN → when required
5. If dosage or frequency is missing but can be reasonably inferred, include it. Otherwise skip that medicine.
6. Remove duplicates if the same medicine appears multiple times.
7. Return exactly JSON, no explanations, no markdown, no comments.

Examples:
Input OCR: "Tab Paracetamol 500mg BD for 5 days"
Output JSON: { "medicines": [ { "name": "Paracetamol", "dosage": "500mg", "frequency": "2 times a day" } ] }

Input OCR: "Inj. Ceftriaxone 1g OD"
Output JSON: { "medicines": [ { "name": "Ceftriaxone", "dosage": "1g", "frequency": "once a day" } ] }

If no medicines are found, return:
{ "medicines": [] }
`;



    // Gemini model init
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // Call Gemini API
    const result = await model.generateContent([
      {
        inlineData: {
          data: imageData,
          mimeType: "image/jpeg",
        },
      },
      { text: prompt },
    ]);

    const text = result.response?.candidates?.[0]?.content?.parts?.[0]?.text?.trim() || "";
    if (!text) {
      throw new Error("Empty response from Gemini");
    }

    return cleanJSON(text);
  } catch (err) {
    console.error("❌ Gemini API error:", err);
    throw new Error("Failed to extract medicines from image");
  }
}
