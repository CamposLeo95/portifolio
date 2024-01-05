import Home from "./sections/Home"
import Projects from "./sections/Projects"
import Skills from "./sections/Skills"
import Contacts from "./sections/Contacts"
import About from "./sections/About"

import light from "./theme/light"
import { ThemeProvider } from "styled-components"
import { ModalContextProvider } from "./Context/ModalContext"

function App() {

  return (
    <ModalContextProvider>
      <ThemeProvider theme={light}>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contacts />
      </ThemeProvider>
    </ModalContextProvider>

  )
}

export default App
