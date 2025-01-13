'use client'

import { ChevronDown } from 'lucide-react'

export function FilterBar() {
  return (
    <div className="flex gap-2 p-4 overflow-x-auto scrollbar-hide">
      <button className="flex items-center gap-1 px-4 py-2 bg-[#302b36] rounded-full text-sm whitespace-nowrap">
        All cities
        <ChevronDown size={16} />
      </button>
      <button className="flex items-center gap-1 px-4 py-2 bg-[#302b36] rounded-full text-sm whitespace-nowrap">
        Subgenre
        <ChevronDown size={16} />
      </button>
      <button className="flex items-center gap-1 px-4 py-2 bg-[#302b36] rounded-full text-sm whitespace-nowrap">
        Location
        <ChevronDown size={16} />
      </button>
    </div>
  )
}

