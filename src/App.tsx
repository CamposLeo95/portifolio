import Home from "./components/sections/Home"
import Projects from "./components/sections/Projects"
import Skills from "./components/sections/Skills"
import Contacts from "./components/sections/Contacts"
import About from "./components/sections/About"

import light from "./theme/light"
import { ThemeProvider } from "styled-components"

function App() {

  return (
    <ThemeProvider theme={light}>
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contacts />
    </ThemeProvider>

  )
}

export default App
