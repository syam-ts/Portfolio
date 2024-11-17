import Home from "./components/Home"
import Navbar from "./components/Navbar"

const App: React.FC = () => { 

  return (
    <div className='bg-gray-950 h-full'> 
     <Navbar />
     <Home />
    </div>
  )
}

export default App
