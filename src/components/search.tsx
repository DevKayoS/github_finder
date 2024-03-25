import { BsSearch } from "react-icons/bs"
import {useState, KeyboardEvent} from "react"

type SearchProps = {
  loadUser: (userName: string) => void
}

export function SearchControl({loadUser}: SearchProps){
  const [userName, setUserName] = useState("")

  const handleKeyDown = (e: KeyboardEvent ) => {
    if(e.key === "Enter"){
      loadUser(userName)
    }
  }


  return(
    <div className="text-2xl mt-10 bg-slate-950/60 w-[500px] flex flex-col items-center p-3 rounded-xl shadow-lg shadow-black mb-20">
      <h2>Busque por um usuário: </h2>
      <p className="text-xl text-slate-50/50 mb-8">Conheça seus melhores repositórios</p>
      <div className="flex items-center gap-3 mb-4">
        <input 
        className="text-slate-50/50 outline-none w-full bg-slate-700/20 px-2 py-3 rounded-xl shadow-lg shadow-black"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        onKeyDown={handleKeyDown}
        type="text" 
        placeholder="Digite um usuário..." />
        <button
        onClick={() => loadUser(userName)}
        className="bg-slate-700/20 p-3 rounded-lg shadow-md hover:shadow-white"
        ><BsSearch className=" "/></button>
      </div>
    </div>
  )
}