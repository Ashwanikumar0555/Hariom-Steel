"use client"

import React from "react"
import { motion } from "framer-motion"
import { FaWhatsapp } from "react-icons/fa" 

export default function WhatsAppButton({ className = "", showText = true }) {
  const whatsappNumber = "918708275179"
  const whatsappLink = `https://wa.me/${whatsappNumber}`

  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition-colors ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <FaWhatsapp className="h-5 w-5" />
      {showText && <span className="font-medium">Chat on WhatsApp</span>}
    </motion.a>
  )
}
