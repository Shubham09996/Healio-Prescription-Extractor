import { useState } from "react"
import UploadBox from "../components/UploadBox"
import MedicineCard from "../components/MedicineCard"
import { motion } from "framer-motion"
import { HiOutlineDocumentSearch } from "react-icons/hi"

export default function Upload() {
  const [result, setResult] = useState(null)

  return (
    <section className="mx-auto max-w-7xl px-4 py-12">
      <h2 className="text-3xl font-bold text-slate-800">Upload Prescription</h2>
      <p className="text-slate-600 mt-1">Scan your prescription and get medicines extracted instantly</p>

      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        {/* Left: Upload */}
        <UploadBox onResult={setResult} />

        {/* Right: Results */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative rounded-2xl bg-white/80 backdrop-blur border border-slate-200 shadow-lg p-6 min-h-[420px] flex flex-col"
        >
          {!result ? (
            <div className="flex-1 grid place-items-center text-center text-slate-500">
              <div>
                <div className="mx-auto w-16 h-16 rounded-2xl bg-slate-100 grid place-items-center text-2xl text-slate-400">
                  <HiOutlineDocumentSearch />
                </div>
                <p className="mt-4 font-medium">Upload a prescription to see details here</p>
                <p className="text-sm text-slate-400">Your extracted medicines will appear in this panel</p>
              </div>
            </div>
          ) : (
            <>
              {/* Preview image */}
              <div className="relative mb-4">
                <img
                  src={result.fileUrl}
                  alt="preview"
                  className="rounded-xl max-h-64 object-contain mx-auto shadow"
                />
              </div>

              {/* Medicines */}
              <div>
                <h4 className="font-semibold mb-3 text-slate-800">Extracted Medicines</h4>
                <div className="grid gap-4 sm:grid-cols-2">
                  {result.medicines.map((m, i) => (
                    <MedicineCard key={i} {...m} />
                  ))}
                </div>
              </div>
            </>
          )}
        </motion.div>
      </div>
    </section>
  )
}
