import Image from 'next/image'
import Link from 'next/link'

interface EventCardProps {
  title: string
  venue: string
  date: string
  image: string
}

export function EventCard({ title, venue, date, image }: EventCardProps) {
  return (
    <Link href="/event/1" className="block">
      <div className="bg-[#302b36] rounded-lg overflow-hidden">
        <div className="relative h-48">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-4">
          <h2 className="font-semibold text-lg">{title}</h2>
          <p className="text-[#aba3b5] text-sm">{venue}</p>
          <p className="text-[#aba3b5] text-sm">{date}</p>
          <button className="mt-3 bg-[#8f47c9] text-white px-4 py-2 rounded-md text-sm">
            Get tickets
          </button>
        </div>
      </div>
    </Link>
  )
}

