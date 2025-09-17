import Header from "./_components/header"
import { Button } from "./_components/ui/button"
import Image from "next/image"
import { db } from "./_lib/prisma"
import BarberShopItem from "./_components/barbershop-item"
import { quickSearchOptions } from "./_constants/searchs"
import BookingItem from "./_components/booking-item"
import Search from "./_components/search"

const Home = async () => {
  /* CHAMAR O DB */
  const barbershops = await db.barbershop.findMany()
  const popularBarbershops = await db.barbershop.findMany()
  return (
    <div>
      <Header />
      {/* Home */}
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, Fulano!</h2>
        <p>Terçeira-Feira, 3 de Setembro. </p>

        {/* Busca */}
        <div className="mt-6">
          <Search />
        </div>

        {/* Busca Rapida */}
        <div className="mt-6 flex gap-3 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
          {quickSearchOptions.map((option) => (
            <Button className="gap-2" variant="secondary" key={option.title}>
              <Image
                src={option.imageUrl}
                width={16}
                height={16}
                alt={option.title}
              />
              {option.title}
            </Button>
          ))}
        </div>

        {/* Banner */}
        <div className="relative mt-6 h-[150px] w-full">
          <Image
            src="/banner-01.png"
            fill
            className="rounded-xl object-cover"
            alt="Agende com os melhores barbeiros aqui na FSW Barber"
          />
        </div>

        {/* Agendamento */}
        <BookingItem />

        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400 antialiased">
          Recomendados
        </h2>
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {barbershops.map(
            (Barbershop: {
              id: string
              name: string
              phones: string[]
              description: string
              imageUrl: string
              address: string
              createdAt: Date
              updatedAt: Date
            }) => (
              <BarberShopItem key={Barbershop.id} barbershop={Barbershop} />
            ),
          )}
        </div>

        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400 antialiased">
          Populares
        </h2>
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {popularBarbershops.map(
            (Barbershop: {
              name: string
              id: string
              address: string
              phones: string[]
              description: string
              imageUrl: string
              createdAt: Date
              updatedAt: Date
            }) => (
              <BarberShopItem key={Barbershop.id} barbershop={Barbershop} />
            ),
          )}
        </div>
      </div>
    </div>
  )
}

export default Home
