import { motion } from "framer-motion"
import { Link } from "react-router-dom"

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-cyan-500 via-emerald-500 to-blue-600 text-white">
      {/* Glow Effects in Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/3 w-72 h-72 bg-cyan-400/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-emerald-400/20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-28 text-center">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight drop-shadow-lg"
        >
          Upload. Scan. Remind. <span className="text-yellow-300">Order.</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          className="mt-6 text-lg md:text-xl/relaxed text-white/90 max-w-3xl mx-auto"
        >
          Transform your prescription management with <span className="font-semibold">AI-powered medicine extraction</span> and <span className="font-semibold">smart reminders</span>.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          className="mt-10 flex items-center justify-center gap-4"
        >
          <Link
            to="/upload"
            className="px-6 py-3 rounded-xl font-semibold bg-white text-cyan-600 shadow-md hover:shadow-lg hover:bg-slate-100 transition"
          >
            Upload Prescription
          </Link>
          <Link
            to="/dashboard"
            className="px-6 py-3 rounded-xl font-semibold bg-white/10 text-white border border-white/30 backdrop-blur hover:bg-white/20 transition"
          >
            View Dashboard
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
