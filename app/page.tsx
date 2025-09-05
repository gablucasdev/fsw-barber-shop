import { Input } from "./_components/ui/input"
import Header from "./_components/header"
import { SearchIcon } from "lucide-react"
import { Button } from "./_components/ui/button"
import Image from "next/image"
import { Card, CardContent } from "./_components/ui/card"
import { Badge } from "./_components/ui/badge"
import { Avatar, AvatarImage } from "./_components/ui/avatar"
import { db } from "./_lib/prisma"
import BarberShopItem from "./_components/barbershop-item"



const Home = async () => {
  /* CHAMAR O DB */
  const barbershops = await db.barberShop.findMany({})
  const popularBarbershops = await db.barberShop.findMany({
    orderBy: {
      name: "desc",
    },
  })

  /* n to conseguindo puxar os dados do DB */

  return (
    <div>
      <Header />
      {/* Home */}
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, Fulano!</h2>
        <p>Terçeira-Feira, 3 de Setembro. </p>

        {/* Busca */}
        <div className="mt-6 flex items-center gap-2">
          <Input placeholder="Search"></Input>
          <Button className="bg-indigo-600 text-white">
            <SearchIcon />
          </Button>
        </div>

        {/* Busca Rapida */}
        <div className="flex gap-3 mt-6">
          <Button className="gap-2 " variant="secondary">
            <Image src="/cabelo.svg" width={16} height={16} alt={"Cabelo"} />
            Cabelo</Button>

            <Button className="gap-2 " variant="secondary">
            <Image src="/barba.svg" width={16} height={16} alt={"Barba"} />
            Barba</Button>

            <Button className="gap-2 " variant="secondary">
            <Image src="/acabamento.svg" width={16} height={16} alt={"Acabamento"} />
            Acabamento</Button>
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

        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400 antialiased">
          Agendamento
        </h2>

        <Card>
          <CardContent className="flex justify-between p-0">
            {/* ESQUERDA */}
            <div className="flex flex-col gap-2 py-5 pl-5">
              <Badge className="w-fit bg-indigo-600 font-bold text-white">
                Confirmado
              </Badge>
              <h3 className="font-semibold">Corte de Cabelo</h3>

              <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src="https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png"></AvatarImage>
                </Avatar>
                <p className="text-sm">Barbearia FSW</p>
              </div>
            </div>

            {/* DIREITA */}
            <div className="flex flex-col items-center justify-center border-l-2 border-solid px-5">
              <p className="text-sm">Setembro</p>
              <p className="text-2xl">03</p>
              <p className="text-sm">20:30</p>
            </div>
          </CardContent>
        </Card>

        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400 antialiased">
          Recomendados
        </h2>
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {barbershops.map((barbershop) => (
            <BarberShopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>

        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400 antialiased">
          Populares
        </h2>
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {popularBarbershops.map((barbershop) => (
            <BarberShopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>

      <footer>
        <Card>
          <CardContent className="px-5 py-6">
            <p className="text-sm text-gray-400">
              © 2025 copyright{" "}
              <span className="font-bold">FSW Barbershop</span>
            </p>
          </CardContent>
        </Card>
      </footer>
    </div>
  )
}

export default Home
