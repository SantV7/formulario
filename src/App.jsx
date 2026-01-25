import WellcomeMsg from "./components/WellcomeMsg"
import { FaFileContract } from "react-icons/fa6";
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
              <h1>Seu site</h1>
            </div>
            <div id="vy_logo"></div>
            <FaFileContract size={36}/>
          </header>
        </form>
      </main>
     </>
  )
}

export default App
