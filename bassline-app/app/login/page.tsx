import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function LoginPage() {
  return (
    <main className="min-h-screen p-4 flex flex-col items-center justify-center">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-2">BL</h1>
          <p className="text-[#aba3b5]">Discover the best events in your city</p>
        </div>

        <div className="space-y-4">
          <button className="w-full bg-white text-black py-3 rounded-lg font-medium flex items-center justify-center gap-2">
            Continue with Google
          </button>
          <button className="w-full bg-black text-white py-3 rounded-lg font-medium flex items-center justify-center gap-2 border border-white">
            Continue with Apple
          </button>
          <button className="w-full bg-[#1877f2] text-white py-3 rounded-lg font-medium flex items-center justify-center gap-2">
            Continue with Facebook
          </button>
        </div>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-[#302b36]"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-[#141217] text-[#aba3b5]">Or continue with</span>
          </div>
        </div>

        <button className="w-full bg-[#302b36] text-white py-3 rounded-lg font-medium">
          Sign up with email
        </button>

        <p className="text-center text-sm text-[#aba3b5]">
          By continuing, you agree to the Terms of Use and Privacy Policy.
        </p>
      </div>
    </main>
  )
}

