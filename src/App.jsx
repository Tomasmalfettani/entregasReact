import './App.css'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavBar from './Components/NavBar/NavBar'


function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>

          <Route path='/' element={<ItemListContainer />} />
          <Route path='/:categoryId' element={<ItemListContainer />} />
          <Route path='/item/:idProduct' element={<ItemDetailContainer />} />

        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
