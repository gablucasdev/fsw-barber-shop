// app/_components/welcome-message.tsx
"use client"

import { useSession } from "next-auth/react"
import { format } from "date-fns"
import { ptBR } from "date-fns/locale"

export default function WelcomeMessage() {
  const { data: session } = useSession()

  const userName = session?.user?.name?.split(" ")[0] || ""
  const today = format(new Date(), "EEEE',' dd 'de' MMMM", { locale: ptBR })

  return (
    <div className="p-5">
      <h2 className="text-xl font-bold">
        Bem-vindo{userName ? `, ${userName}` : ""}
      </h2>
      <p className="capitalize text-gray-500">{today}</p>
    </div>
  )
}
