import WellcomeMsg from "./components/WellcomeMsg"
import { FaFileContract } from "react-icons/fa6";
import '../src/styles/form/form_main.css'
import './styles/global.css'
import TextInfoContract from "./components/TextInfoContract";
function App() {


  return (
     <>
     <WellcomeMsg />

      <main>
        <form id="form_area">
          <header id="form_header">
            <div id="vy_logo"></div>
            <FaFileContract id="icon_contract" size={36}/>
          </header>

          <TextInfoContract />

        </form>
      </main>
     </>
  )
}

export default App
