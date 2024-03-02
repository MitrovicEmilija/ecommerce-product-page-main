import { BrowserRouter } from "react-router-dom"

import { Navbar, Body } from './components'

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-white">
        <div className="bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Body />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
