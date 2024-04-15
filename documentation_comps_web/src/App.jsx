import './App.css'
import Link from './components/Link'
import Route from './components/Route'
import Dropdownpage from './pages/Dropdownpage'
import Accordionpage from './pages/Accordionpage'
import Buttonpage from './pages/Buttonpage'

function App() {
  return (
    <>
      <Link to={"/accordion"}>
      Go to accordion
      </Link>
      <Link to={"/dropdown"}>
      Go to Dropdown
      </Link>
      <div>
        <Route path={"/accordion"}>
          <Accordionpage/>
        </Route>
        <Route path={"/dropdown"}>
          <Dropdownpage/>
        </Route>
        <Route path={"/button"}>
          <Buttonpage/>
        </Route>
      </div>
    </>
  )
}

export default App
