"use client"

import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { SearchIcon } from "lucide-react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import BarbershopsPage from "../barbershops/page"

const Search = () => {
  const [search, setSearch] = useState("")
  const router = useRouter()

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    router.push(`/barbershops?search=${search}`)
  }

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
      <Input
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Button
        className="bg-indigo-600 text-white"
        onClick={handleSubmit}
        type="submit"
      >
        <SearchIcon />
      </Button>
    </form>
  )
  console.log({ BarbershopsPage })
}

export default Search
