import { motion } from "framer-motion"

export default function StatsCard({ title, value, icon }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.04 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="card p-6 flex items-center gap-5 cursor-pointer border border-slate-100 hover:border-blue-300 hover:shadow-lg transition-all"
    >
      {/* Icon Box */}
      <motion.div
        whileHover={{ rotate: 10, scale: 1.15 }}
        className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 grid place-items-center text-blue-600 text-3xl shadow-inner"
      >
        {icon}
      </motion.div>

      {/* Content */}
      <div>
        <p className="text-slate-500 text-sm font-medium">{title}</p>
        <motion.p
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 120, damping: 10, delay: 0.1 }}
          className="text-3xl font-extrabold text-slate-800 tracking-tight"
        >
          {value}
        </motion.p>
      </div>
    </motion.div>
  )
}
