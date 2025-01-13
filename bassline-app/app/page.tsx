import { Navigation } from '@/components/navigation'
import { EventCard } from '@/components/event-card'
import { FilterBar } from '@/components/filter-bar'

export default function Home() {
  return (
    <main className="min-h-screen pb-20">
      <header className="p-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold">BL</h1>
        <button className="text-[#aba3b5]">Log in</button>
      </header>
      
      <FilterBar />
      
      <div className="p-4 space-y-4">
        <EventCard
          title="Avalanche - The Return"
          venue="The Midway"
          date="Sat, Jan 21"
          image="/placeholder.svg?height=200&width=400"
        />
        <EventCard
          title="Wormhole Wednesdays"
          venue="The New Parish"
          date="Wed, Dec 14"
          image="/placeholder.svg?height=200&width=400"
        />
        <EventCard
          title="Rinse:It with Loefah & Kromestar"
          venue="The Public Works SF"
          date="Fri, Jan 23"
          image="/placeholder.svg?height=200&width=400"
        />
      </div>

      <Navigation />
    </main>
  )
}

