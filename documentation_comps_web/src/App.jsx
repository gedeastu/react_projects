import './App.css'
import Button from './components/Button'

function App() {
  return (
    <>
    <div className='flex flex-row justify-center items-center gap-10 bg-lime-400 h-screen'>
      <Button primary rounded outline medium>
        CLICK
      </Button>
      <Button outline danger rounded large>
        SHUT
      </Button>
    </div>
    </>
  )
}

export default App
