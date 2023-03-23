import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"

import { Container } from "./styles"

function App() {

  return (
    <Container>
      <Navbar />
      <Outlet />
    </Container>
  )
}

export default App
