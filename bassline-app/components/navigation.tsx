'use client'

import Link from 'next/link'
import { Home, User } from 'lucide-react'
import { usePathname } from 'next/navigation'

export function Navigation() {
  const pathname = usePathname()
  
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-[#211f26] border-t border-[#302b36] px-4 py-2">
      <div className="flex justify-around items-center max-w-md mx-auto">
        <Link 
          href="/"
          className={`flex flex-col items-center p-2 ${
            pathname === '/' ? 'text-[#8f47c9]' : 'text-[#aba3b5]'
          }`}
        >
          <Home size={24} />
          <span className="text-xs mt-1">Home</span>
        </Link>
        <Link 
          href="/profile"
          className={`flex flex-col items-center p-2 ${
            pathname === '/profile' ? 'text-[#8f47c9]' : 'text-[#aba3b5]'
          }`}
        >
          <User size={24} />
          <span className="text-xs mt-1">Profile</span>
        </Link>
      </div>
    </nav>
  )
}

