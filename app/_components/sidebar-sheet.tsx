"use client"

import { Button } from "./ui/button"
import Image from "next/image"
import { CalendarDays, HomeIcon, LogInIcon, LogOutIcon } from "lucide-react"
import { SheetContent, SheetHeader, SheetTitle, SheetClose } from "./ui/sheet"
import { quickSearchOptions } from "../_constants/searchs"
import Link from "next/link"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog"

import { signIn, signOut, useSession } from "next-auth/react"
import { Avatar, AvatarImage } from "./ui/avatar"

const SidebarSheet = () => {
  const handleLogoutClick = () => signOut()
  const { data } = useSession()
  useSession()

  return (
    <SheetContent
      className="overflow-y-auto [&::-webkit-scrollbar]:hidden"
      side="right"
    >
      <SheetHeader>
        <SheetTitle className="text-left">Menu</SheetTitle>
      </SheetHeader>

      <div className="flex items-center justify-between gap-3 border-b border-solid py-5">
        {data?.user ? (
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage src={data?.user?.image ?? ''} width={18} height={18}/>
            </Avatar>

            <div>
              <p className="font-bold">{data.user.name}</p>
              <p className="text-xs">{data.user.email}</p>
            </div>
          </div>
        ) : (
          <>
            <h2 className="font-bold">Olá, faça seu login!</h2>
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  className="border-x-2 border-y-2 bg-indigo-600"
                  variant="ghost"
                  size="icon"
                >
                  <LogInIcon />
                </Button>
              </DialogTrigger>
              <DialogContent className="w-[90%]">
                <DialogHeader>
                  <DialogTitle>Faça seu Login</DialogTitle>
                  <DialogDescription>
                    Conect-se usando sua conta Google
                  </DialogDescription>
                </DialogHeader>

                <Button
                  variant="outline"
                  className="gap-1 font-bold"
                  onClick={() => signIn("google")}
                >
                  <Image
                    src={"/google.svg"}
                    alt="Fazer login com o Google"
                    width={18}
                    height={18}
                  />
                  Google
                </Button>
              </DialogContent>
            </Dialog>
          </>
        )}
      </div>

      <div className="flex flex-col gap-4 border-b border-solid py-5">
        <SheetClose asChild>
          <Button
            className="justify-start gap-2 text-white"
            asChild
            variant="ghost"
          >
            <Link href="/">
              <HomeIcon size={18} />
              Inicio
            </Link>
          </Button>
        </SheetClose>
        <Button className="justify-start gap-2 text-white" variant="ghost">
          <CalendarDays size={18} />
          Agendamentos
        </Button>
      </div>

      <div className="flex flex-col gap-4 border-b border-solid py-5">
        {quickSearchOptions.map((option) => (
          <Button
            key={option.title}
            className="justify-start gap-2 text-white"
            variant="ghost"
          >
            <Image
              alt={option.title}
              src={option.imageUrl}
              height={18}
              width={18}
            />
            {option.title}
          </Button>
        ))}
      </div>

      <div className="flex flex-col gap-4 py-5">
        <Button variant="ghost" className="justify-start gap-2" onClick={handleLogoutClick}>
          <LogOutIcon size={18} />
          Sair da Conta
        </Button>
      </div>
    </SheetContent>
  )
}

export default SidebarSheet
