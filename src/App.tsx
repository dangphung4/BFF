import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { Outlet } from "react-router-dom"

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
