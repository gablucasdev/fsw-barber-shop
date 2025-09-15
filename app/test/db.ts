import { db } from "../_lib/prisma"

async function teste() {
  const shops = await db.Barbershop.findMany()
  console.log(shops)
}

teste()