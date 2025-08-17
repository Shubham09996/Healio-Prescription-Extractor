import { motion } from "framer-motion"
import { FiUpload, FiSearch, FiBell, FiShoppingCart } from "react-icons/fi"

const steps = [
  { icon: <FiUpload />, title: "Upload Prescription", desc: "Drag & drop or capture instantly" },
  { icon: <FiSearch />, title: "AI Extraction", desc: "OCR extracts medicine details" },
  { icon: <FiBell />, title: "Smart Reminders", desc: "Never miss a dose" },
  { icon: <FiShoppingCart />, title: "Order Online", desc: "Links to 1mg & PharmEasy" },
]

export default function HowItWorks() {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-slate-50 via-cyan-50 to-emerald-50">
      {/* Decorative Glow */}
      <div className="absolute inset-0">
        <div className="absolute -top-10 -left-10 w-72 h-72 bg-cyan-200/40 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-200/40 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center text-slate-800"
        >
          How It Works
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-center text-slate-600 mt-3"
        >
          Four simple steps to better medication management
        </motion.p>

        {/* Steps Grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6, ease: "easeOut" }}
              className="p-6 text-center rounded-2xl bg-white/70 backdrop-blur shadow-md hover:shadow-xl transition transform hover:-translate-y-2"
            >
              <div className="mx-auto w-14 h-14 rounded-2xl bg-gradient-to-tr from-cyan-500 to-blue-500 grid place-items-center text-2xl text-white shadow-md">
                {s.icon}
              </div>
              <h3 className="mt-5 font-semibold text-lg text-slate-800">{s.title}</h3>
              <p className="text-sm text-slate-600 mt-2">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
