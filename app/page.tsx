import { Input } from "./_components/ui/input"
import Header from "./_components/header"
import { SearchIcon } from "lucide-react"
import { Button } from "./_components/ui/button"
import Image from "next/image"
import { Card, CardContent } from "./_components/ui/card"
import { Badge } from "./_components/ui/badge"
import { Avatar, AvatarImage } from "./_components/ui/avatar"

const Home = () => {
  return (
    <div>
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, Fulano!</h2>
        <p>Terçeira-Feira, 3 de Setembro. </p>

        <div className="mt-6 flex items-center gap-2">
          <Input placeholder="Search"></Input>
          <Button className="bg-indigo-600 text-white">
            <SearchIcon />
          </Button>
        </div>

        <div className="relative mt-6 h-[150px] w-full">
          <Image
            src="/banner-01.png"
            fill
            className="rounded-xl object-cover"
            alt="Agende com os melhores barbeiros aqui na FSW Barber"
          />
        </div>

        <Card className="mt-6">
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
            <div className="flex flex-col items-center justify-center px-5 border-l-2 border-solid">
              <p className="text-sm">Setembro</p>
              <p className="text-2xl">03</p>
              <p className="text-sm">20:30</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Home
