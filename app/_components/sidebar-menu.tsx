"use client"

import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "./ui/sheet"
import { Button } from "./ui/button"
import { Avatar, AvatarImage } from "./ui/avatar"
import { HomeIcon, CalendarDays, LogOutIcon, MenuIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

type QuickSearchOption = {
  title: string
  imageUrl: string
}

type SidebarMenuProps = {
  userName: string
  userEmail: string
  userAvatarUrl: string
  quickSearchOptions: QuickSearchOption[]
}

const SidebarMenu = ({
  userName,
  userEmail,
  userAvatarUrl,
  quickSearchOptions,
}: SidebarMenuProps) => {
  return (
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

        {/* User Info */}
        <div className="flex items-center gap-3 border-b border-solid py-5">
          <Avatar>
            <AvatarImage src={userAvatarUrl} />
          </Avatar>
          <div>
            <p className="font-bold">{userName}</p>
            <p className="text-xs">{userEmail}</p>
          </div>
        </div>

        {/* Links principais */}
        <div className="flex flex-col gap-4 border-b border-solid py-5">
          <SheetClose asChild>
            <Button
              className="justify-start gap-2 text-white"
              variant="ghost"
              asChild
            >
              <Link href="/">
                <HomeIcon size={18} />
                Início
              </Link>
            </Button>
          </SheetClose>

          <Button className="justify-start gap-2 text-white" variant="ghost">
            <CalendarDays size={18} />
            Agendamentos
          </Button>
        </div>

        {/* Quick search */}
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

        {/* Logout */}
        <div className="flex flex-col gap-4 py-5">
          <Button variant="ghost" className="justify-start gap-2">
            <LogOutIcon size={18} />
            Sair da Conta
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default SidebarMenu
