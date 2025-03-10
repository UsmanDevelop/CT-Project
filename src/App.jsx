import NavBar from './Components/NavBar'
import Home from './Pages/Home'
import Services from './Pages/Services'
import HowItWorks from './Pages/HowItWorks'
import Partners from './Pages/Partners'
import Footer from './Pages/Footer'

import './App.css'






function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex flex-col  items-center align-bottom h-full bg-black'>


        <NavBar />
        <Home />

        <Services />
        <HowItWorks />

        <div className='h-contain'>
          <Partners />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
