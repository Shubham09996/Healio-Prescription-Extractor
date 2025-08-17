import mongoose from "mongoose";

const prescriptionSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  filePath: { type: String, required: true }, // ye required hai
  medicines: [
    {
      name: String,
      dosage: String,
      frequency: String,
    },
  ],
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Prescription", prescriptionSchema);
