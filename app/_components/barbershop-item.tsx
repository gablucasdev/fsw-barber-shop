import { BarberShop } from "@prisma/client"
import { Card, CardContent } from "./ui/card"
import Image from "next/image"

interface BarberShopItemProps {
  barbershop: BarberShop
}

const BarberShopItem = ({ barbershop }: BarberShopItemProps) => {
  return (
    <Card className="min-w-[159px]">
      <CardContent className="p-0">
        {/* Imagem */}
        <div className="relative h-[159px] w-full">
          <Image
            fill
            className="object-cover"
            src={barbershop.imageUrl}
            alt={barbershop.name}
          ></Image>
        </div>
        {/* Texto */}
        <div className="px-2 pb-3">
          <h3>{barbershop.name}</h3>
        </div>
      </CardContent>
    </Card>
  )
}

export default BarberShopItem
