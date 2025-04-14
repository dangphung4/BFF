import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { Outlet } from "react-router-dom"
import { useEffect } from "react"

export default function App() {
  // Set dark mode by default
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

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
