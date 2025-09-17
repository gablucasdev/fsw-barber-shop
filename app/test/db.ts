import { db } from "../_lib/prisma"

async function teste() {
  const shops = await db.barbershop.findMany()
  console.log(shops)
}

teste()