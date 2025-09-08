import { Avatar, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";

// TO DOO: reveber agendamento como prop 
const bookingItem = () => {
    return ( 
        <>
         <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400 antialiased">
          Agendamento
        </h2>

        <Card>
          <CardContent className="flex justify-between p-0">
            {/* ESQUERDA */}
            <div className="flex flex-col gap-2 py-5 pl-5">
              <Badge className="w-fit bg-indigo-600 font-bold text-white">
                Confirmado
              </Badge>
              <h3 className="font-semibold">Corte de Cabelo</h3>

              <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src="https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png"></AvatarImage>
                </Avatar>
                <p className="text-sm">Barbearia FSW</p>
              </div>
            </div>

            {/* DIREITA */}
            <div className="flex flex-col items-center justify-center border-l-2 border-solid px-5">
              <p className="text-sm">Setembro</p>
              <p className="text-2xl">03</p>
              <p className="text-sm">20:30</p>
            </div>
          </CardContent>
        </Card></>
     );
}
 
export default bookingItem;