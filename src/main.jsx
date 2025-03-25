import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import COD from './Pages/COD.jsx'
import QuickPayouts from './Pages/QuickPayout.jsx'
import ThreeDayPromise from './Pages/ThreeDayPromise.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element=<App /> />
        <Route path='/cod' element=<COD /> />
        <Route path='/quickpayout' element=<QuickPayouts /> />
        <Route path='/threedaypromise' element=<ThreeDayPromise /> />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
