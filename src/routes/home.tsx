import {  SearchControl } from "../components/search"
import { useState } from "react"

import { UserProps } from "../types/user"
import { User } from "../components/user"
import { Error } from "../components/error"

export function Home(){
  const [user, setUser] = useState<UserProps | null>(null)
  const [error, setError] = useState(false)
  const loadUser = async(userName: string) => {
    setError(false)
    setUser(null)

    const res = await fetch(`https://api.github.com/users/${userName}`)

    const data = await res.json()

    if(res.status === 404){
      setError(true);
      return
    }

    const {avatar_url, login, location, followers, following, name} = data

    const userData: UserProps = {
      name,
      avatar_url,
      login,
      location,
      followers,
      following
    }

    setUser(userData)
  }

  return(
    <div className="flex flex-col items-center">
      <SearchControl loadUser={loadUser}/>
      {user && <User {...user}/>}
      {error && <Error/>}
    </div>
  )
}