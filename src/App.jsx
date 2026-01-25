import WellcomeMsg from "./components/WellcomeMsg"
import { FaFileContract } from "react-icons/fa";
import '../src/styles/form/form_main.css'
import './styles/global.css'

function App() {


  return (
     <>
     <WellcomeMsg />


      <main>
        <form id="form_area">
          <header id="form_header">
            <div className="text_header_form">
              <h1>Proposta</h1>
            </div>
            <FaFileContract size={30}/>
          </header>
        </form>
      </main>
     </>
  )
}

export default App
