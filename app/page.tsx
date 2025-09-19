// SERVER COMPONENTS = sem interatividade (pode ser async)
// A HOME PAGE

{
  /*BUSCA*/
}
import Header from "./_components/header"
import Image from "next/image"
import { Button } from "./_components/ui/button"
import { db } from "./_lib/prisma"
import BarbershopItem from "./_components/barbershop-item"
import BookingItem from "./_components/booking-item"
import Search from "./_components/search"
import Link from "next/link"
import { quickSearchOptions } from "./_constants/searchs"

const Home = async () => {
  //Next e a facilidade com bdd
  //Chamar meu banco de dados
  const barbershops = await db.barbershop.findMany({})
  console.log({ barbershops })

  const popularBarbershops = await db.barbershop.findMany({
    orderBy: {
      name: "desc",
    },
  })

  return (
    <div>
      {/* HEADER */}
      <Header />

      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, Davi!</h2>
        <p>Quarta-feira, 03 de setembro.</p>

        {/*BUSCA*/}

        <div className="mt-4">
          <Search />
        </div>

        {/*BUSCA RÁPIDA*/}
        <div className="scrollbar-hide mt-6 flex gap-3 overflow-x-scroll">
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

        {/*
         <Button className="gap-2" variant="secondary">
            <Image src="./barba.svg" 
            width={16} 
            height={16} 
            alt="Barba"/>
            Barba
          </Button>
        
       
          <Button className="gap-2" variant="secondary">
            <Image 
            src="./acabamento.svg" 
            width={16} 
            height={16} 
            alt="Acabamento"/>
            Acabamento
          </Button>
     
          <Button className="gap-2" variant="secondary">
            <Image 
            src="./massagem.svg" 
            width={16} 
            height={16} 
            alt="Massagem"/>
            Massagem
          </Button>
        

       
          <Button className="gap-2" variant="secondary">
            <Image 
            src="./sobrancelha.svg" 
            width={16} 
            height={16} 
            alt="Sobrancelha"/>
            Sobrancelha
          </Button>

           <Button className="gap-2" variant="secondary">
            <Image 
            src="./hidratacao.svg" 
            width={16} 
            height={16} 
            alt="Hidratação"/>
            Hidratação
          </Button>
*/}

        {/*IMAGEM*/}
        <div className="relative mt-6 h-[150px] w-full">
          <Image
            alt="Agende nos melhores com FSW barber"
            src="/banner-01.png"
            fill
            className="rounded-xl object-cover"
          />
        </div>
        {/*AGENDAMENTO*/}
        <BookingItem />

        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Recomendados
        </h2>

        {/* Passando prop para BarbershopItem */}
        <div className="scrollbar-hide flex gap-4 overflow-auto">
          {barbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>

        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Populares
        </h2>

        {/* Passando prop para BarbershopItem */}
        <div className="scrollbar-hide flex gap-4 overflow-auto">
          {popularBarbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
