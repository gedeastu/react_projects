import './App.css'
import Button from './components/Button'
import { FaApple } from "react-icons/fa";

function App() {
  const handleClick = ()=>{
    console.log("CLICKED!")
  }
  return (
    <>
    <div className='flex flex-row justify-center items-center bg-lime-400 h-screen'>
      <Button primary rounded buttonAnimation outline onClick={handleClick}>
        <FaApple />
        CLICK
      </Button>
      <Button outline danger rounded>
        SHUT
      </Button>
    </div>
    </>
  )
}

export default App
