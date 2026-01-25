import '../styles/form/wellcome_msg.css'
import { FaHeartCircleExclamation } from "react-icons/fa6";

const WellcomeMsg = () => {


  return (
    <>
    <header id='header'>
      <h2>Olá, eu sou <span className="highlight_border">Vinícius</span></h2>
      <p>Desenvolvedor <span className="highlight_border">Front-End</span> em busca da primeira oportunidade de estágio ou freelancer. <br />
      Crio sites modernos, responsivos e com experiências incríveis pra você. <FaHeartCircleExclamation size={33} id='heart_intro'/>
      </p>
    </header>

    </>
  )
}

export default WellcomeMsg

