import { Card, CardContent } from "./ui/card"

const Footer = () => {
  return (
    <footer>
      <Card className="flex">
        <CardContent className="px-5 py-6">
          <p className="text-sm text-gray-400">
            © 2025 copyright
            <span className="font-bold">FSW Barbershop</span>
          </p>
        </CardContent>
      </Card>
    </footer>
  )
}

export default Footer