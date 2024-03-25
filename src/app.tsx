import { Outlet } from "react-router-dom";

export function App() {
  return (
  <div className="text-4xl flex flex-col items-center justify-center mt-16">
    <h1>Github Finder</h1>
    <div>
      <Outlet/>
    </div>
  </div>
  )
}

