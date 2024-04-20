import './App.css'
import Sidebar from './components/Sidebar'
import Route from './components/Route'
import Dropdownpage from './pages/Dropdownpage'
import Accordionpage from './pages/Accordionpage'
import Buttonpage from './pages/Buttonpage'

function App() {
  return (
    <>
    <div className='container mx-auto grid grid-cols-6 border gap-4 mt-6'>
      <Sidebar/>
      <div className='col-span-5'>
        <Route path={"/accordion"}>
          <Accordionpage/>
        </Route>
        <Route path={"/dropdown"}>
          <Dropdownpage/>
        </Route>
        <Route path={"/"}>
          <Buttonpage/>
        </Route>
      </div>
    </div>
    </>
  )
}

export default App
