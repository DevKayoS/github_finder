import {  SearchControl } from "../components/search"
import { useState } from "react"

import { UserProps } from "../types/user"

export function Home(){
  const [user, setUser] = useState<UserProps | null>(null)

  const loadUser = async(userName: string) => {
    const res = await fetch(`https://api.github.com/users/${userName}`)

    const data = await res.json()
  }

  return(
    <div>
      <SearchControl loadUser={loadUser}/>
    </div>
  )
}