import { Card, CardContent } from "./ui/card"
import Image from "next/image"
import { Button } from "./ui/button"
import { StarIcon } from "lucide-react"
import { Badge } from "./ui/badge"
import Link from "next/link"
import { Barbershop } from "@prisma/client"

interface BarberShopItemProps {
  barbershop: Barbershop
}

/* ent eu rpeciso por exemplo pegar isso daqui */

const BarberShopItem = ({ barbershop }: BarberShopItemProps) => {
  return (
    <Card className="min-w-[167px] rounded-2xl">
      <CardContent className="p-0 px-1 pt-1">
        {/* Imagem */}
       { <div className="relative h-[159px] w-full">
          <Image
            fill
            className="rounded-2xl object-cover"
            src={barbershop.imageUrl}
            alt={barbershop.name}
          ></Image>

          <Badge
            className="absolute left-2 top-2 space-x-1"
            variant="secondary"
          >
            <StarIcon
              size={12}
              className="fill-secondary text-indigo-600"
            />
            <p className="text-xs font-semibold">5,0</p>
          </Badge>
        </div>
}
        {/* Texto */}
        <div className="px-1 py-3">
          <h3 className="truncate font-semibold">{barbershop.name}</h3>
          <p className="truncate text-sm text-gray-400">{barbershop.address}</p>
          <Button variant={"secondary"} className="mt-3 w-full" asChild>
            <Link href={`/barbershops/${barbershop.id}`}>Reservar</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default BarberShopItem
