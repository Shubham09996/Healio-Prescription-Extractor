import { FiBell, FiCheckCircle, FiClock, FiTrendingUp } from "react-icons/fi"
import { motion } from "framer-motion"
import StatsCard from "../components/DashboardWidgets/StatsCard"
import ReminderCard from "../components/DashboardWidgets/ReminderCard"
import ActivityFeed from "../components/DashboardWidgets/ActivityFeed"

// Variants for staggered animations
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

export default function Dashboard() {
  const stats = [
    { title: "Active Reminders", value: 0, icon: <FiBell /> },
    { title: "Medicines Tracked", value: 0, icon: <FiCheckCircle /> },
    { title: "Today's Doses", value: 0, icon: <FiClock /> },
    { title: "Streak Days", value: 7, icon: <FiTrendingUp /> },
  ]

  const activities = [
    { text: "Time to take Paracetamol 500mg - Morning dose", time: "2 minutes ago" },
    { text: "Amoxicillin running low - Reorder suggested", time: "1 hour ago" },
    { text: "Prescription successfully processed", time: "3 hours ago" },
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-gray-50 min-h-screen"
    >
      <section className="mx-auto max-w-7xl px-4 py-10">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent"
        >
          Dashboard
        </motion.h2>

        {/* Stats Section */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {stats.map((s) => (
            <motion.div variants={item} key={s.title}>
              <StatsCard {...s} />
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 grid gap-6 lg:grid-cols-3"
        >
          {/* Left: Schedule + Reminders */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="lg:col-span-2"
          >
            {/* Schedule Card */}
            <motion.div
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="card p-6 hover:shadow-lg transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-lg">Today's Schedule</h3>
                <motion.a
                  whileTap={{ scale: 0.9 }}
                  whileHover={{ scale: 1.05 }}
                  href="/upload"
                  className="btn btn-outline"
                >
                  Add Prescription
                </motion.a>
              </div>
              <div className="text-center text-slate-500 py-16">
                No reminders scheduled for today
              </div>
            </motion.div>

            {/* Reminders */}
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="mt-6 grid gap-4 sm:grid-cols-2"
            >
              <motion.div variants={item}>
                <ReminderCard title="Paracetamol 500mg" time="08:00 AM" />
              </motion.div>
              <motion.div variants={item}>
                <ReminderCard title="Amoxicillin 500mg" time="02:00 PM" />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right: Activity Feed */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
          >
            <ActivityFeed items={activities} />
          </motion.div>
        </motion.div>
      </section>
    </motion.div>
  )
}
