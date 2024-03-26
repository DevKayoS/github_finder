import {useState, useEffect} from "react"
import {  useParams } from "react-router-dom"
import { Backbtn } from "../components/BackBtn"
import { RepoProps } from "../types/repo"
import { Loader } from "../components/loader"
import { BsCodeSlash } from "react-icons/bs"
import { AiOutlineFork, AiOutlineStar } from "react-icons/ai"
import { RiGitRepositoryLine } from "react-icons/ri"


export function Repos(){
  const {username} = useParams()
  const [repos, setRepos] = useState<RepoProps[] | [] | null>(null)

  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    
    const loadRepos = async function (username: string) {
      setIsLoading(true)
    
      const res = await fetch(`https://api.github.com/users/${username}/repos`)

      const data = await res.json()

      setIsLoading(false)

      let orderedRepos = data.sort((a: RepoProps, b: RepoProps) => b.stargazers_count - a.stargazers_count)

      orderedRepos = orderedRepos.slice(0,5)

      setRepos(orderedRepos)
    } 

    if(username){
      loadRepos(username)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if(!repos && isLoading) return <Loader/>

  return(
    <div>
      <div className="flex  w-screen">
        <Backbtn/>
      </div>
      <div className="flex itens-center justify-center flex-col max-w-[700px] m-auto">
        <h2 className=""> Explore os repositórios do usuário: {username}</h2>
        {repos && repos.length === 0 && <p className="flex items-center justify-center text-3xl text-slate-400/40">Não há repositórios</p>}
        <ul>
          {repos && repos.length > 0 && (
            
            repos.map((repos)=>(
            <li className="mb-10 bg-slate-950/40 mt-10 p-5 rounded-xl shadow-lg shadow-black">
              <h2>{repos.name}</h2>
              <div className="flex gap-5">
                <p className="flex items-center text-xl mt-3 text-slate-50/70"><BsCodeSlash/> {repos.language}</p>
                <p className="flex items-center text-xl mt-3 text-slate-50/70"><AiOutlineStar/> {repos.stargazers_count}</p>
                <p className="flex items-center text-xl mt-3 text-slate-50/70"><AiOutlineFork/>{repos.forks_count}</p>
              </div>
              <p className="text-slate-50/30 text-2xl mt-5 ">{repos.description}</p>
              <div className="flex justify-end">
                <a href={repos.html_url}
                className="text-xl flex gap-2  items-center justify-center mt-6 text-slate-50/90 hover:text-slate-50/50  rounded-md bg-slate-400/50 w-28 py-2 hover:bg-slate-600/50 "
                >Ver mais<RiGitRepositoryLine/></a>
              </div>
            </li>
          )))}
        </ul>
      </div>
    </div>
  )
}