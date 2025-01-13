import { ArrowLeft, MapPin } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function EventPage() {
  return (
    <main className="min-h-screen">
      <div className="relative h-64">
        <Image
          src="/placeholder.svg?height=400&width=800"
          alt="Event cover"
          fill
          className="object-cover"
        />
        <Link 
          href="/"
          className="absolute top-4 left-4 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center"
        >
          <ArrowLeft className="text-white" />
        </Link>
      </div>

      <div className="p-4 space-y-6">
        <div>
          <h1 className="text-2xl font-bold">FWD: 20th Birthday - The Final Chapter</h1>
          <p className="text-[#aba3b5] mt-1">Sat, 25 Feb 2023, 14:00 - Sun, 26 Feb 2023, 06:00 UTC</p>
        </div>

        <div className="space-y-2">
          <h2 className="font-semibold">Venue</h2>
          <div className="flex items-start gap-2 text-[#aba3b5]">
            <MapPin className="shrink-0 mt-1" size={18} />
            <div>
              <p className="font-medium text-white">The Steel Yard, London</p>
              <p className="text-sm">13-16 Allhallows Ln, London EC4R 3UE, UK</p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="font-semibold">Line-up</h2>
          <div className="space-y-4">
            <div className="bg-[#302b36] p-4 rounded-lg">
              <h3 className="font-medium">Room 1</h3>
              <p className="text-[#aba3b5] text-sm mt-1">2:00 pm - 3:30 pm</p>
              <p className="text-sm mt-1">Dillinja b2b Low</p>
            </div>
            <div className="bg-[#302b36] p-4 rounded-lg">
              <h3 className="font-medium">Room 2</h3>
              <p className="text-[#aba3b5] text-sm mt-1">3:30 pm - 5:00 pm</p>
              <p className="text-sm mt-1">DJ Storm b2b Flight</p>
            </div>
          </div>
        </div>

        <div className="flex gap-3 pt-4">
          <button className="flex-1 bg-[#8f47c9] text-white py-3 rounded-lg font-medium">
            Buy Tickets
          </button>
          <button className="flex-1 border border-[#8f47c9] text-[#8f47c9] py-3 rounded-lg font-medium">
            Add to Favorites
          </button>
        </div>
      </div>
    </main>
  )
}

