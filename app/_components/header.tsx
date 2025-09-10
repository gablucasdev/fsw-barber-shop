import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"
import Image from "next/image"
import { CalendarDays, HomeIcon, LogOutIcon, MenuIcon } from "lucide-react"
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "./ui/sheet"
import { quickSearchOptions } from "../_constants/searchs"
import { Avatar, AvatarImage } from "./ui/avatar"
import Link from "next/link"

const Header = () => {
  return (
    <Card>
      <CardContent className="flex flex-row items-center justify-between p-5">
        <Image alt="FSW Barber" src="/logo.png" width={150} height={50} />

        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="black">
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SheetContent
            className="overflow-y-auto [&::-webkit-scrollbar]:hidden"
            side="right"
          >
            <SheetHeader>
              <SheetTitle className="text-left">Menu</SheetTitle>
            </SheetHeader>

            <div className="flex items-center gap-3 border-b border-solid py-5">
              <Avatar>
                <AvatarImage src="data:image/jpeg;base64,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" />
              </Avatar>

              <div>
                <p className="font-bold">Gabriel Lucas</p>
                <p className="text-xs">gabriel@gmail.com</p>
              </div>
            </div>

            <div className="flex flex-col gap-4 border-b border-solid py-5">
              <SheetClose asChild>
                <Button
                  className="justify-start gap-2 text-white" asChild
                  variant="ghost"
                >
                  <Link href="/">
                    <HomeIcon size={18} />
                    Inicio
                  </Link>
                </Button>
              </SheetClose>
              <Button
                className="justify-start gap-2 text-white"
                variant="ghost"
              >
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
              <Button variant="ghost" className="justify-start gap-2">
                <LogOutIcon size={18} />
                Sair da Conta
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </CardContent>
    </Card>
  )
}

export default Header
