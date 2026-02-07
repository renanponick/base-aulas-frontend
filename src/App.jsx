import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Header from './componets/Header'
import Footer from './componets/Footer'
import { SignUp } from './pages/SignUp'

function App() {
  return (
    <>
      <Header />

      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </main>

      <Footer />
    </>
  )
}

export default App
