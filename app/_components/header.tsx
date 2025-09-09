import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"
import Image from "next/image"
import { MenuIcon, Sheet } from "lucide-react"
import { SheetTrigger } from "./ui/sheet"

const Header = () => {
  return (
    <Card>
      <CardContent className="flex flex-row items-center justify-between p-5">
        <Image alt="FSW Barber" src="/logo.png" width={150} height={50} />

        <Sheet>
          <SheetTrigger>
            <Button size="icon" variant="black">
              <MenuIcon />
            </Button>
          </SheetTrigger>
        </Sheet>
      </CardContent>
    </Card>
  )
}

export default Header
