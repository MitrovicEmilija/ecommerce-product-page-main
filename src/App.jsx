import { BrowserRouter } from "react-router-dom"

import { Navbar, Product } from './components'

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-white">
        <div className="bg-cover bg-no-repeat bg-center">
          <Navbar />
        </div>
        <Product />
      </div>
    </BrowserRouter>
  )
}

export default App
