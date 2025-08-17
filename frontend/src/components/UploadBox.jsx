import { useRef, useState } from "react"
import { motion } from "framer-motion"
import { HiOutlineCamera, HiOutlinePhoto, HiOutlineCloudArrowUp, HiOutlineArrowPath } from "react-icons/hi2"
import axios from "axios"

export default function UploadBox({ onResult }) {
  const inputRef = useRef(null)
  const [file, setFile] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleFile = async (f) => {
    if (!f) return
    setFile(f)

    // Upload to backend
    const formData = new FormData()
    formData.append("prescription", f)   // ✅ fixed: backend field name match kiya
    formData.append("userId", "demoUser") // baad me actual userId laga dena

    try {
      setLoading(true)
      const res = await axios.post("http://localhost:5000/api/prescriptions/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })

      // Callback to parent (Dashboard ya jaha use ho raha hai)
      onResult?.({
        fileUrl: URL.createObjectURL(f),
        medicines: res.data.data.medicines || [],
      })
    } catch (err) {
      console.error(err)
      alert("Upload failed. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const resetUpload = () => {
    setFile(null)
    inputRef.current.value = ""
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative space-y-6"
    >
      {/* Upload Box */}
      <div
        className="relative overflow-hidden rounded-2xl bg-white/70 backdrop-blur border border-slate-200 shadow-lg hover:shadow-xl transition cursor-pointer h-80 flex items-center justify-center"
        onClick={() => !file && inputRef.current?.click()}
      >
        {/* Decorative gradient blobs */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-200/40 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-cyan-200/40 rounded-full blur-3xl"></div>

        <div className="relative z-10 text-center">
          {!file ? (
            <>
              <motion.div
                whileHover={{ scale: 1.1, rotate: 3 }}
                className="mx-auto w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 grid place-items-center text-4xl text-white shadow-md"
              >
                <HiOutlineCloudArrowUp />
              </motion.div>
              <h4 className="mt-6 text-xl font-bold text-slate-800">Upload Prescription</h4>
              <p className="text-sm text-slate-600 mt-1">
                Drag & drop your prescription or click to browse
              </p>
            </>
          ) : (
            <>
              {loading ? (
                <p className="text-blue-600 font-medium">⏳ Processing prescription...</p>
              ) : (
                <>
                  <img
                    src={URL.createObjectURL(file)}
                    alt="Preview"
                    className="max-h-56 mx-auto rounded-xl border border-slate-200 shadow-md object-cover"
                  />
                  <p className="text-xs text-slate-500 mt-2 italic">{file.name}</p>
                </>
              )}
            </>
          )}
        </div>

        {/* Hidden Input */}
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          onChange={(e) => handleFile(e.target.files?.[0])}
          className="hidden"
        />
      </div>

      {/* Action Buttons */}
      {!file ? (
        <div className="grid grid-cols-2 gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="button"
            className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium py-3 shadow-md hover:shadow-lg transition"
          >
            <HiOutlineCamera className="text-xl" /> Take Photo
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="button"
            className="flex items-center justify-center gap-2 rounded-xl bg-white/70 border border-slate-200 text-slate-700 font-medium py-3 shadow-sm hover:bg-blue-50 transition"
          >
            <HiOutlinePhoto className="text-xl" /> From Gallery
          </motion.button>
        </div>
      ) : (
        !loading && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={resetUpload}
            type="button"
            className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium py-3 shadow-md hover:shadow-lg transition"
          >
            <HiOutlineArrowPath className="text-xl" /> Upload Another
          </motion.button>
        )
      )}
    </motion.div>
  )
}
