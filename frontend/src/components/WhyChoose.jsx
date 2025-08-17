import { motion } from "framer-motion"
import { Link } from "react-router-dom"

export default function WhyChoose() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-200/30 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="mx-auto max-w-3xl px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative p-10 rounded-3xl bg-white/70 backdrop-blur shadow-xl border border-slate-100 text-center"
        >
          {/* Title */}
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-3xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent"
          >
            Ready to Get Started?
          </motion.h3>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-slate-600 mt-4 text-lg"
          >
            Upload your first prescription and experience the{" "}
            <span className="font-semibold text-slate-800">future of medication management</span>.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <Link
              to="/upload"
              className="inline-block mt-8 px-6 py-3 rounded-xl text-white font-semibold shadow-lg 
              bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 
              transition-transform transform hover:-translate-y-1"
            >
              🚀 Start Now
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
