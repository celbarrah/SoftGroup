"use client"
import React from 'react'
import { motion } from "framer-motion"

const MapSection = () => {
  return (
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.2 }}
            className="relative overflow-hidden rounded-sm shadow-xl top-5"
            style={{ minHeight: "480px" }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.221955363532!2d-7.6624216999999994!3d33.5995451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d306eef8cf9f%3A0x2d6a3a2b230a7d79!2sSOFTGROUP%20Immobilier!5e0!3m2!1sfr!2sma!4v1780932668643!5m2!1sfr!2sma"
              width="100%"
              height="100%"
              style={{ border: 0, position: "absolute", inset: 0, minHeight: "480px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="SOFTGROUP — Localisation Casablanca"
            />
            {/* Thin gold border overlay */}
            <div className="absolute inset-0 pointer-events-none border border-gold/20 rounded-sm" />
          </motion.div>
  )
}

export default MapSection