import './App.css'
import NavBar from './Components/NavBar/Navbar'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'

function App() {

  const descuento = "10% de descuento en productos seleccionados"

  return (
    <>
    <NavBar/>
    <ItemListContainer mensaje={descuento}/>
    </>
  )
}

export default App
