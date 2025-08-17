import { motion } from "framer-motion"
import { HiOutlineClock } from "react-icons/hi2"

export default function MedicineCard({ name, dosage, frequency, loading = false }) {
  return (
    <motion.div
      whileHover={{ scale: loading ? 1 : 1.02 }}
      transition={{ type: "spring", stiffness: 220 }}
      className="relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur border border-slate-200 shadow-md hover:shadow-xl p-6 flex flex-col justify-between min-h-[180px]"
    >
      {/* Decorative gradient blobs */}
      <div className="absolute -top-8 -right-8 w-32 h-32 bg-blue-200/30 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-cyan-200/30 rounded-full blur-3xl"></div>

      {/* Content */}
      <div className="relative z-10">
        <div className="flex items-start justify-between">
          <div>
            {loading ? (
              <>
                <div className="h-5 w-32 bg-slate-200 rounded animate-pulse mb-2"></div>
                <div className="h-4 w-24 bg-slate-200 rounded animate-pulse"></div>
              </>
            ) : (
              <>
                <h3 className="text-lg font-semibold text-slate-800">{name}</h3>
                <p className="text-sm text-slate-600">{dosage}</p>
              </>
            )}
          </div>
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 grid place-items-center text-white shadow">
            {loading ? (
              <div className="w-4 h-4 bg-white/60 rounded-full animate-pulse"></div>
            ) : (
              <HiOutlineClock className="text-lg" />
            )}
          </div>
        </div>

        <div className="mt-4">
          {loading ? (
            <div className="h-6 w-20 bg-slate-200 rounded-lg animate-pulse"></div>
          ) : (
            <div className="text-sm font-medium text-blue-600 bg-blue-50 rounded-lg px-3 py-1 inline-block shadow-sm">
              {frequency}
            </div>
          )}
        </div>
      </div>

      {/* Future order links section */}
      <div className="relative z-10 mt-6 border-t border-slate-200 pt-4">
        {loading ? (
          <div className="h-3 w-40 bg-slate-200 rounded animate-pulse"></div>
        ) : (
          <p className="text-xs text-slate-500">Order online (coming soon...)</p>
        )}
      </div>
    </motion.div>
  )
}
