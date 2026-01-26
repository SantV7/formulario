import WellcomeMsg from "./components/WellcomeMsg"
import { FaFileContract } from "react-icons/fa6";
import '../src/styles/form/main_text.css'
import './styles/global.css'
import TextInfoContract from "./components/TextInfoContract";
function App() {


  return (
     <>
     <WellcomeMsg />

      <main>
        <div id="box_introdution_area">
          <header id="form_header">
            <div id="vy_logo"></div>
            <FaFileContract id="icon_contract" size={39}/>
          </header>
          
          <TextInfoContract />
        </div>



      </main>
     </>
  )
}

export default App
