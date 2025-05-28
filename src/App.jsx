
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import AboutPage from "./Pages/AboutPage"
import Home from "./Pages/Home"
import Layout from "./components/Layout"


let router = createBrowserRouter(createRoutesFromElements(
  <Route element={<Layout/>}>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/about" element={<AboutPage/>}></Route>
  </Route>
))

function App() {

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
