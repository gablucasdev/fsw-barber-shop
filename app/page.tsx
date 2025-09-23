import Header from "./_components/header"
import Image from "next/image"
import { Button } from "./_components/ui/button"
import { db } from "./_lib/prisma"
import BarbershopItem from "./_components/barbershop-item"
import BookingItem from "./_components/booking-item"
import Search from "./_components/search"
import Link from "next/link"
import { quickSearchOptions } from "./_constants/searchs"
import WelcomeMessage from "./_components/WelcomeMessage"

const Home = async () => {
  const barbershops = await db.barbershop.findMany({})
  const popularBarbershops = await db.barbershop.findMany({
    orderBy: {
      name: "desc",
    },
  })

  return (
    <div>
      {/* HEADER */}
      <Header />

      {/* BEM-VINDO */}
      <WelcomeMessage />

      {/* BUSCA */}
      <div className="mt-4 px-5">
        <Search />
      </div>

      {/* BUSCA RÁPIDA */}
      <div className="scrollbar-hide mt-6 flex gap-3 overflow-x-scroll px-5 [&::-webkit-scrollbar]:hidden">
        {quickSearchOptions.map((option) => (
          <Button
            className="gap-2"
            variant="secondary"
            key={option.title}
            asChild
          >
            <Link href={`/barbershops?/service=${option.title}`}>
              <Image
                src={option.imageUrl}
                width={16}
                height={16}
                alt={option.title}
              />
              <p>{option.title}</p>
            </Link>
          </Button>
        ))}
      </div>

      {/* IMAGEM */}
      <div className="relative mt-6 h-[150px] w-full px-5">
        <Image
          alt="Agende nos melhores com FSW barber"
          src="/banner-01.png"
          fill
          className="rounded-xl object-cover"
        />
      </div>

      {/* AGENDAMENTO */}
      <div className="px-5">
        <BookingItem />

        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Recomendados
        </h2>

        <div className="scrollbar-hide flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {barbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>

        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Populares
        </h2>

        <div className="scrollbar-hide flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {popularBarbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
