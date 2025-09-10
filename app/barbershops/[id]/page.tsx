import PhoneItem from "@/app/_components/phone-item"
import ServicerItem from "@/app/_components/service-item"
import { Button } from "@/app/_components/ui/button"
import { db } from "@/app/_lib/prisma"
import {
  ChevronLeftIcon,
  MapPinIcon,
  MenuIcon,
  StarIcon,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

interface BarbershopPageProps {
  params: {
    id: string
  }
}

const BarbershopPage = async ({ params }: BarbershopPageProps) => {
  const barbershop = await db.barberShop.findUnique({
    where: {
      id: params.id,
    },
    include: {
      services: true,
    },
  })

  if (!barbershop) {
    return notFound()
  }

  return (
    <div>
      {/* Imagem */}
      <div className="relative h-[250px] w-full">
        <Image
          alt={barbershop?.name}
          src={barbershop?.imageUrl}
          fill
          className="object-cover"
        />

        <Button
          asChild
          size="icon"
          variant="secondary"
          className="absolute left-4 top-4"
        >
          <Link href="/">
            <ChevronLeftIcon />
          </Link>
        </Button>

        <Button
          size="icon"
          variant="secondary"
          className="absolute right-4 top-4"
        >
          <MenuIcon />
        </Button>
      </div>

      {/* titulo */}
      <div className="border-b border-solid p-5">
        <h1 className="mb-3 text-xl font-bold">{barbershop?.name}</h1>
        <div className="mb-2 flex items-center gap-2">
          <MapPinIcon className="fill-secondary text-indigo-600" size={18} />
          <p className="text-sm">{barbershop?.address}</p>
        </div>

        <div className="flex items-center gap-2">
          <StarIcon className="fill-secondary text-indigo-600" size={18} />
          <p className="text-sm">5,0 (472 avaliações)</p>
        </div>
      </div>

      {/* Descrição */}
      <div className="space-y-3 border-b border-solid p-5">
        <h2></h2>
        <h2 className="text-xs font-bold uppercase text-gray-400">Sobre Nós</h2>
        <p className="text-justify text-sm">{barbershop?.description}</p>
      </div>

      {/* SERVIÇOS */}
      <div className="space-y-3 border-b border-solid p-5">
        <h2 className="text-xs font-bold uppercase text-gray-400">Sobre Nós</h2>
        <div className="space-y-3">
          {barbershop.services.map((service) => (
            <ServicerItem key={service.id} service={service} />
          ))}
        </div>
      </div>

      {/* CONTATO */}
      <div className="space-y-3 p-5">
        {barbershop.phones.map((phone) => (
          <PhoneItem key={phone} phone={phone} />
        ))}
      </div>
    </div>
  )
}



export default BarbershopPage
