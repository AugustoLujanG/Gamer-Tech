import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"
import { ChakraProvider } from "@chakra-ui/react"

function App() {
  return (
    <ChakraProvider>
      <NavBar />
      <ItemListContainer greeting={"Bienvenido a Gamer Tech"}/>
    </ChakraProvider>
  )
}

export default App
