'use client'

import Link from "next/link"
import { motion } from 'framer-motion'
import { Lock, User } from 'lucide-react'

import { AuthInput } from "@/components/auth-input"
import { AuthLayout } from "@/components/auth-layout"
import { Button } from "@/components/ui/button"

export default function LoginPage() {
  return (
    <AuthLayout title="Login">
      <form className="space-y-6">
        <AuthInput
          icon={<User className="h-5 w-5" />}
          placeholder="USERNAME"
          type="text"
          required
          delay={0.3}
        />
        <AuthInput
          icon={<Lock className="h-5 w-5" />}
          placeholder="PASSWORD"
          type="password"
          required
          delay={0.4}
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Button className="h-12 w-full bg-white text-blue-600 hover:bg-white/90 transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]" size="lg">
            LOGIN
          </Button>
        </motion.div>
      </form>
      <motion.div 
        className="mt-4 flex items-center justify-between text-sm text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <Link href="/signup" className="hover:underline transition-colors hover:text-blue-200">
          Create account
        </Link>
        <Link href="/forgot-password" className="hover:underline transition-colors hover:text-blue-200">
          Forgot password?
        </Link>
      </motion.div>
    </AuthLayout>
  )
}

