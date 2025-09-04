import { Barbershop } from "@prisma/client"
import { Card, CardContent } from "./ui/card";
import { Image } from "next/image";

interface BarberShopItemProps {
    barbershop: Barbershop
}

const BarberShopItem = ({barbershop}: BarberShopItemProps) => {
    return ( 
        <Card>
            <CardContent>
                {/* IMAGE */}
                <div className="relative h-[159px]">
                    <Image fill className="object-contain"></Image>
                </div>
            </CardContent>
        </Card>
     );
}
 
export default BarberShopItem;