import './App.css'
import Header from './Components/Header/Header'

function App() {

  const descuento = "10% de descuento en productos seleccionados"

  return (
    <>
    <Header mensaje={descuento}/>
    </>
  )
}

export default App
