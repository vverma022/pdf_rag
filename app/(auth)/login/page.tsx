import type { Metadata } from "next"
import Link from "next/link"
import * as Icons from "@heroicons/react/24/solid"
import { LoginForm } from "@/main-components/auth/loginform"

export const metadata: Metadata = {
  title: "Login",
  description: "Login to your account",
}

export default function LoginPage() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
  <div className="mx-auto w-full max-w-[350px] flex flex-col justify-center space-y-6">
    <div className="flex flex-col space-y-2 text-center">
      <Icons.LockClosedIcon className="mx-auto h-6 w-6" />
      <h1 className="text-2xl font-semibold tracking-tight">Welcome back</h1>
      <p className="text-sm text-muted-foreground">Enter your email to sign in to your account</p>
    </div>
    <LoginForm />
    <p className="px-8 text-center text-sm text-muted-foreground">
      <Link href="/signup" className="hover:text-brand underline underline-offset-4">
        Don&apos;t have an account? Sign Up
      </Link>
    </p>
  </div>
</div>
  )
}

