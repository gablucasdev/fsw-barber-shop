import { Card, CardContent } from "./card"
import Image from "next/image"

const Header = () => {
  return (
    <Card>
      <CardContent>
        <Image alt="FSW Barber" src="/logo.png" width={150} height={50} />
      </CardContent>
    </Card>
  )
}

export default Header    
