import { Link } from "react-router-dom";

export function Backbtn(){
  return(
    <Link to={"/"}
    className="flex ml-8 text-2xl py-3 px-4 rounded-xl bg-slate-400/20 hover:bg-slate-400/10"
    >Voltar</Link>
  )
}