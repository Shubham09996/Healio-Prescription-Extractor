import { motion } from "framer-motion"
import { FiBell, FiClock, FiCheckCircle } from "react-icons/fi"

export default function ReminderCard({ title, time, type = "dose" }) {
  // type ke hisaab se color/icon decide
  const typeConfig = {
    dose: { icon: <FiBell />, bg: "bg-emerald-50", text: "text-emerald-600", border: "border-emerald-500" },
    schedule: { icon: <FiClock />, bg: "bg-blue-50", text: "text-blue-600", border: "border-blue-500" },
    completed: { icon: <FiCheckCircle />, bg: "bg-purple-50", text: "text-purple-600", border: "border-purple-500" },
  }

  const { icon, bg, text, border } = typeConfig[type] || typeConfig.dose

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className={`card p-5 flex items-center gap-4 border-t-4 ${border} shadow-sm hover:shadow-md transition`}
    >
      {/* Icon */}
      <motion.div
        whileHover={{ scale: 1.15, rotate: 8 }}
        className={`w-12 h-12 rounded-xl grid place-items-center ${bg} ${text} text-lg`}
      >
        {icon}
      </motion.div>

      {/* Content */}
      <div className="flex-1">
        <div className="font-semibold text-slate-800">{title}</div>
        <div className="text-xs text-slate-500 mt-1">{time} · {type}</div>
      </div>

      {/* Button */}
      <motion.button
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.05 }}
        className={`px-4 py-1.5 text-sm rounded-full text-white ${border.replace("border-", "bg-")}`}
      >
        Done
      </motion.button>
    </motion.div>
  )
}
