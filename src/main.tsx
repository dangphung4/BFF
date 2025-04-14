import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import "./index.css"
import App from "./App.tsx"
import HomePage from "./pages/HomePage.tsx"
import ShopPage from "./pages/ShopPage.tsx"
import RepairPage from "./pages/RepairPage.tsx"
import BeforeAfterPage from "./pages/BeforeAfterPage.tsx"
import TestimonialsPage from "./pages/TestimonialsPage.tsx"
import AboutPage from "./pages/AboutPage.tsx"
import ContactPage from "./pages/ContactPage.tsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "shop", element: <ShopPage /> },
      { path: "repair-services", element: <RepairPage /> },
      { path: "before-after", element: <BeforeAfterPage /> },
      { path: "testimonials", element: <TestimonialsPage /> },
      { path: "about", element: <AboutPage /> },
      { path: "contact", element: <ContactPage /> }
    ]
  }
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
