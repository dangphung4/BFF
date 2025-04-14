import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import "./index.css"
import App from "./App.tsx"
import HomePage from "./pages/HomePage.tsx"
import ServicesPage from "./pages/ServicesPage.tsx"
import ProductsPage from "./pages/ProductsPage.tsx"
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
      { path: "services", element: <ServicesPage /> },
      { path: "products", element: <ProductsPage /> },
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
