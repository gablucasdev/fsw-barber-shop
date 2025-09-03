import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"
import Image from "next/image"
import { MenuIcon } from "lucide-react"

const Header = () => {
  return (
    <Card>
      <CardContent className="p-5 justify-between flex flex-row items-center">
        <Image alt="FSW Barber" src="/logo.png" width={150} height={50} />
        <Button size="icon" variant="black">
        <MenuIcon />
        </Button>
      </CardContent>
    </Card>
  )
}

export default Header    
