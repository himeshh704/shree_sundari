"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsAppFAB() {
  const whatsappNumber = "919660651719"; 
  const message = encodeURIComponent("Hello! I'm interested in booking an appointment with Shreesundari.");

  return (
    <motion.a
      href={`https://wa.me/${whatsappNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 flex items-center justify-center w-16 h-16 rounded-full text-white shadow-2xl"
      style={{ backgroundColor: "#25D366" }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <MessageCircle size={32} />
      
      {/* Pulse effect */}
      <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75 animate-ping z-[-1]" style={{ animationDuration: '3s' }}></span>
    </motion.a>
  );
}
