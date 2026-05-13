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
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13292.887836868216!2d-7.662422!3d33.599545!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d306041585e7%3A0xb91ed398330cf3cd!2sANFAPLACE%20SHOPPING%20CENTER!5e0!3m2!1sfr!2sma!4v1778667821577!5m2!1sfr!2sma"
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