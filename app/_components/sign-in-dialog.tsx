import { signIn } from "next-auth/react"
import { Button } from "./ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog"
import Image from "next/image"

const SignInDialog = () => {
  const handleLoginWithGoogleClick = () => signIn("google")
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Entrar</Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle className="sr-only">Faça seu login na plataforma</DialogTitle>
          <DialogDescription>Conecte-se</DialogDescription>
        </DialogHeader>
    
        <Button
          variant="outline"
          className="gap-1 font-bold"
          onClick={handleLoginWithGoogleClick}
        >
          <Image
            alt="Fazer login com o Google"
            src="/google.svg"
            width={18}
            height={18}
          />
          Google
        </Button>
      </DialogContent>
    </Dialog>
  )
}
/* quando eu fui  atras a unica coisa q apareceu foi esse negocio de estar sem title mas assim neh   ja ta*/
export default SignInDialog
