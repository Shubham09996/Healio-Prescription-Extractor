import { motion } from "framer-motion"
import { FiMail, FiPhone, FiMapPin, FiFacebook, FiTwitter, FiLinkedin } from "react-icons/fi"

export default function Footer() {
  return (
    <footer className="relative mt-8 bg-gradient-to-br from-white via-sky-50 to-blue-50 border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-6 py-10 grid gap-12 md:grid-cols-3">
        
        {/* Logo + About */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 grid place-items-center text-white text-lg font-bold shadow-md">Rx</div>
            <span className="font-bold text-lg text-slate-800">Smart Prescription</span>
          </div>
          <p className="mt-3 text-sm text-slate-600 max-w-sm">
            Simplifying medication management with AI-powered scanning, smart reminders, and online ordering.
          </p>

          {/* Social icons */}
          <div className="flex gap-4 mt-4 text-slate-500">
            {[FiFacebook, FiTwitter, FiLinkedin].map((Icon, i) => (
              <a key={i} href="#" className="hover:text-blue-600 transition">
                <Icon size={20} />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h4 className="font-semibold mb-4 text-slate-800">Contact Us</h4>
          <ul className="space-y-3 text-sm text-slate-600">
            <li className="flex items-center gap-2"><FiMail /> support@smartprescription.com</li>
            <li className="flex items-center gap-2"><FiPhone /> +91-98765-43210</li>
            <li className="flex items-center gap-2"><FiMapPin /> India</li>
          </ul>
        </motion.div>

        {/* Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h4 className="font-semibold mb-4 text-slate-800">Quick Links</h4>
          <ul className="space-y-3 text-sm text-slate-600">
            {["Privacy Policy", "Terms of Service", "Help Center"].map((link, i) => (
              <li key={i} className="hover:text-blue-600 cursor-pointer transition">{link}</li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-200 text-center text-xs text-slate-500 py-4">
        © {new Date().getFullYear()} <span className="font-medium">Smart Prescription Manager</span>. All rights reserved.
      </div>
    </footer>
  )
}
