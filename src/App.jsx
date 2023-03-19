import { BrowserRouter, Routes, Route } from "react-router-dom"
import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"
import { ChakraProvider } from "@chakra-ui/react"
import ItemaDetailContainer from "./components/ItemaDetailContainer"
import Index from "./components/Index"
import Cart from "./components/Cart"

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Index />} />
          <Route exact path="/productos" element={<ItemListContainer />} />
          <Route exact path="/categorias/:categoria" element={<ItemListContainer />} />
          <Route exact path="/item/:id" element={<ItemaDetailContainer />} />
          <Route exact path="/cart" element={<Cart />} />
          <ItemListContainer greeting={"Bienvenido a Gamer Tech"} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  )
}

export default App
