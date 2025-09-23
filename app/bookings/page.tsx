// app/_components/booking-item.tsx
import Image from "next/image"
import { Prisma } from "@prisma/client"

type BookingWithServiceAndBarbershop = Prisma.BookingGetPayload<{
  include: {
    service: {
      include: {
        barbershop: true
      }
    }
  }
}>

interface BookingItemProps {
  booking: BookingWithServiceAndBarbershop
}

const BookingItem = ({ booking }: BookingItemProps) => {
  return (
    <div className="rounded-xl border p-4">
      <div className="flex items-center gap-4">
        <Image
          src={booking.service.imageUrl}
          alt={booking.service.name}
          width={80}
          height={80}
          className="rounded-lg object-cover"
        />

        <div className="flex flex-col">
          <strong>{booking.service.name}</strong>
          <span className="text-sm text-gray-500">
            {booking.service.barbershop.name}
          </span>
          <span className="text-sm text-gray-500">
            {booking.date.toLocaleString("pt-BR", {
              day: "2-digit",
              month: "long",
              hour: "2-digit",
              minute: "2-digit",
            })}
          </span>
        </div>
      </div>
    </div>
  )
}

export default BookingItem
