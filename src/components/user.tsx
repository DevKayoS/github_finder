import { Link } from "react-router-dom"
import { UserProps } from "../types/user"
import { MdLocationPin } from "react-icons/md"
import { GoArrowRight } from "react-icons/go";

export function User({avatar_url, login, location, followers, following, name}: UserProps){
  return(
    <div className="bg-slate-950/60 w-[500px]  flex flex-col  p-10 rounded-xl shadow-lg shadow-black space-y-5">
      <div>
        <img src={avatar_url} alt={login} className="rounded-full size-72 m-auto border-4 mb-4 p-2 border-slate-400 shadow-lg  shadow-black " />
        <p>{name}</p>
        <p className="text-slate-50/50 text-2xl">{login}</p>
      </div>
      <div className="h-px bg-slate-50 mt-2 mb-2"/>
        <p >{location && <p className="text-slate-50 font-semibold text-2xl flex items-center justify-center"> <MdLocationPin className="text-slate-400 size-10"/>  <span className=" text-slate-50/50"> {location}</span></p>}</p>
      <div className="flex gap-5  items-center justify-center">
        <p className="text-slate-50 font-semibold text-2xl"> Seguidores: <span className="ml-4 text-slate-50/50"> {followers}</span></p>
        <div className="w-px h-10 bg-slate-50"/>
        <p  className="text-slate-50 font-semibold text-2xl"> Seguindo: <span className="ml-4 text-slate-50/50"> {following}</span></p>
      </div>

      <Link to={`/repos/${login}`}
      className="text-xl flex items-center justify-center mt-6 text-slate-950 m-auto rounded-md bg-slate-400 w-64 py-4 hover:bg-slate-600 "
      >Ver Melhores projetos <GoArrowRight /> </Link>
    </div>
  )
}