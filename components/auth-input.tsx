'use client'

import { motion } from 'framer-motion'
import { Input } from "@/components/ui/input"

interface AuthInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon: React.ReactNode
  delay?: number
}

export function AuthInput({ icon, className, delay = 0, ...props }: AuthInputProps) {
  return (
    <motion.div 
      className="relative"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.3 }}
    >
      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 transition-transform duration-200 group-focus-within:scale-110">
        {icon}
      </div>
      <Input
        className="h-12 border-white/20 bg-white/10 pl-10 text-white placeholder:text-gray-400 focus-visible:border-white/30 focus-visible:ring-0 transition-all duration-200 hover:bg-white/[0.15] focus:bg-white/[0.15]"
        {...props}
      />
    </motion.div>
  )
}

