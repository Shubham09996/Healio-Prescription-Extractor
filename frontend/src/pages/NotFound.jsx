import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { HiOutlineExclamationCircle } from "react-icons/hi"

export default function NotFound() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 text-center">
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Big 404 Number */}
        <motion.h1
          className="text-6xl md:text-8xl font-extrabold text-slate-800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          404
        </motion.h1>

        {/* Icon */}
        <motion.div
          className="mx-auto mt-6 w-16 h-16 rounded-2xl bg-red-50 grid place-items-center text-red-500 text-3xl"
          initial={{ scale: 0, rotate: -90 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.4, type: "spring" }}
        >
          <HiOutlineExclamationCircle />
        </motion.div>

        {/* Message */}
        <motion.p
          className="mt-6 text-lg text-slate-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Oops! The page you are looking for doesn’t exist.
        </motion.p>

        {/* Button */}
        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <Link to="/" className="btn btn-primary px-6 py-3 text-lg">
            Go Home
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}
