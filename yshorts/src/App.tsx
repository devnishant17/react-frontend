import './App.css'
import Shorts from './components/Shorts'
import Nav from './components/Nav'

function App() {
  return (
    <div className="flex flex-col items-center min-h-screen w-full">
      <Nav />
      <div className="flex justify-center items-center flex-grow w-full">
        <Shorts />
      </div>
    </div>
  )
}

export default App
