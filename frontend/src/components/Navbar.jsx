import { Link, NavLink, useLocation } from "react-router-dom"
import { FiUploadCloud } from "react-icons/fi"
import { motion } from "framer-motion"

export default function Navbar() {
  const { pathname } = useLocation()

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 70, damping: 12 }}
      className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200 shadow-sm"
    >
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <motion.div
            whileHover={{ rotate: 10, scale: 1.1 }}
            className="h-10 w-10 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 grid place-items-center text-white text-lg font-bold shadow-md"
          >
            Rx
          </motion.div>
          <div className="leading-tight">
            <div className="font-bold text-slate-900">Healio</div>
            <div className="text-xs text-slate-500 -mt-0.5"></div>
          </div>
        </Link>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-brand-600 font-semibold relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:bg-brand-500"
                : "text-slate-600 hover:text-slate-900 transition"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive
                ? "text-brand-600 font-semibold relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:bg-brand-500"
                : "text-slate-600 hover:text-slate-900 transition"
            }
          >
            Dashboard
          </NavLink>
        </nav>

        {/* Upload Button */}
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            to="/upload"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 text-white font-semibold shadow-md hover:shadow-lg transition"
          >
            <FiUploadCloud className="text-lg" />
            {pathname === "/upload" ? "Uploading…" : "Upload Prescription"}
          </Link>
        </motion.div>
      </div>
    </motion.header>
  )
}
