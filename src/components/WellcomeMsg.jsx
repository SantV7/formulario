import '../styles/form/wellcome_msg.css'
import { AiFillAliwangwang } from "react-icons/ai";

const WellcomeMsg = () => {


  return (
    <>
    <header id='header'>
      <div className="header_background"></div>
      <h2>Opa, eu sou o <span className="highlight_border">Vinícius</span></h2>
      <p>Desenvolvedor <span className="highlight_border">Front-End</span> em busca da primeira oportunidade de estágio ou freelancer. <br />
      Crio sites modernos, responsivos e com experiências incríveis pra você. <AiFillAliwangwang size={48} id='icon_intro'/>
      </p>
    </header>
    </>
  )
}

export default WellcomeMsg
