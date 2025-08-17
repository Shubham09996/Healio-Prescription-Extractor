import { motion } from "framer-motion"
import { FiActivity } from "react-icons/fi"

export default function ActivityFeed({ items = [] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="card p-6 shadow-md border-t-4 border-blue-500 bg-white"
    >
      <div className="flex items-center gap-2 mb-4">
        <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 grid place-items-center">
          <FiActivity />
        </div>
        <h4 className="font-semibold text-lg">Recent Activity</h4>
      </div>

      {items.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-sm text-slate-500 py-10 text-center"
        >
          <FiActivity className="mx-auto text-xl mb-2 text-slate-400" />
          No recent activity.
        </motion.div>
      )}

      <div className="space-y-4">
        {items.map((a, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="flex items-start gap-3 rounded-lg p-3 hover:bg-slate-50 transition"
          >
            <div className="w-10 h-10 flex-shrink-0 rounded-full bg-gradient-to-br from-blue-100 to-blue-50 grid place-items-center text-blue-600">
              <FiActivity />
            </div>
            <div className="flex-1">
              <div className="text-sm font-medium">{a.text}</div>
              <div className="text-xs text-slate-500">{a.time}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
