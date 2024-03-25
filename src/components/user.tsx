import { Link } from "react-router-dom"
import { UserProps } from "../types/user"
import { MdLocationPin } from "react-icons/md"
import { GoArrowRight } from "react-icons/go";

export function User({avatar_url, login, location, followers, following, name}: UserProps){
  return(
    <div className="bg-slate-950/60 w-[500px]  flex flex-col  p-10 rounded-xl shadow-lg shadow-black">
      <div>
        <img src={avatar_url} alt={login} className="rounded-full size-72 m-auto border-4 border-slate-50/50 p-2" />
        <p>{name}</p>
        <p className="text-slate-50/50 text-2xl">{login}</p>
      </div>
      <div className="h-px bg-slate-50 mt-2 mb-2"/>
        <p >{location && <p className="text-slate-50 font-semibold text-2xl flex items-center"> <MdLocationPin/> Location: <span className="ml-4 text-slate-50/50"> {location}</span></p>}</p>
      <div className="flex gap-5 ">
        <p className="text-slate-50 font-semibold text-2xl"> Seguidores: <span className="ml-4 text-slate-50/50"> {followers}</span></p>
        <div className="w-px h-10 bg-slate-50"/>
        <p  className="text-slate-50 font-semibold text-2xl"> Seguindo: <span className="ml-4 text-slate-50/50"> {following}</span></p>
      </div>

      <Link to={`/repos/${login}`}
      className="text-xl flex items-center justify-center mt-6 text-slate-50/50 hover:text-slate-50"
      >Ver Melhores projetos <GoArrowRight /> </Link>
    </div>
  )
}