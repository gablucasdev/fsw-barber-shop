import { Input } from "./_components/ui/input"
import Header from "./_components/header"
import { SearchIcon } from "lucide-react"
import { Button } from "./_components/ui/button"
import Image from "next/image"

const Home = () => {
  return (
    <div>
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, Fulano!</h2>
        <p>Terçeira-Feira, 3 de Setembro. </p>

        <div className="mt-6 flex items-center gap-2">
          <Input placeholder="Search"></Input>
          <Button className="bg-indigo-600">
            <SearchIcon />
          </Button>
        </div>

        <div className="relative mt-6 h-[150px] w-full ">
          <Image
            src="/banner-01.png"
            fill
            className="object-cover rounded-xl"
            alt="Agende com os melhores barbeiros aqui na FSW Barber"
          />
        </div>
      </div>
    </div>
  )
}

export default Home
