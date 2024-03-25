import { BsSearch } from "react-icons/bs"
import {useState} from "react"

type SearchProps = {
  loadUser: (userName: string) => void
}

export function SearchControl({loadUser}: SearchProps){
  const [userName, setUserName] = useState("")


  return(
    <div className="text-2xl mt-10 bg-slate-950/60 size-96 flex flex-col items-center p-3 rounded-xl shadow-lg shadow-black">
      <h2>Busque por um usuário: </h2>
      <p className="text-xl text-slate-50/50 mb-8">Conheça seus melhores repositórios</p>
      <div className="flex items-center gap-3">
        <input 
        className="text-slate-50/50 bg-slate-700/20 px-2 py-3 rounded-xl shadow-lg shadow-black"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        type="text" 
        placeholder="Digite o nome do usuário" />
        <button
        onClick={() => loadUser(userName)}
        className="bg-slate-700/20 p-3 rounded-lg shadow-md hover:shadow-white"
        ><BsSearch className=" "/></button>
      </div>
    </div>
  )
}