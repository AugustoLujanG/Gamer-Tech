import  './css/style.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"
import { ChakraProvider } from "@chakra-ui/react"
import ItemaDetailContainer from "./components/ItemaDetailContainer"
import Cart from "./components/Cart"
import Error from "./components/Error"

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<ItemListContainer />} />
          <Route exact path="/productos" element={<ItemListContainer />} />
          <Route exact path="/category/:category" element={<ItemListContainer />} />
          <Route exact path="/item/:id" element={<ItemaDetailContainer />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact patch="*" element={<Error />}/>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  )
}

export default App
