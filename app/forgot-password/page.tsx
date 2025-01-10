'use client'

import Link from "next/link"
import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'

import { AuthInput } from "@/components/auth-input"
import { AuthLayout } from "@/components/auth-layout"
import { Button } from "@/components/ui/button"

export default function ForgotPasswordPage() {
  return (
    <AuthLayout title="Reset Password">
      <motion.div 
        className="mb-6 text-center text-sm text-white/80"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        Enter your email address and we&apos;ll send you a link to reset your password.
      </motion.div>
      <form className="space-y-6">
        <AuthInput
          icon={<Mail className="h-5 w-5" />}
          placeholder="EMAIL"
          type="email"
          required
          delay={0.4}
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Button className="h-12 w-full bg-white text-blue-600 hover:bg-white/90 transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]" size="lg">
            SEND RESET LINK
          </Button>
        </motion.div>
      </form>
      <motion.div 
        className="mt-4 text-center text-sm text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        Remember your password?{" "}
        <Link href="/login" className="hover:underline transition-colors hover:text-blue-200">
          Login
        </Link>
      </motion.div>
    </AuthLayout>
  )
}

