import { useState } from "react";
import { FaRegUser, FaUser } from "react-icons/fa6";
import { HiOutlineMail, HiOutlineMailOpen } from "react-icons/hi";
import { IoMdArrowDropdown } from "react-icons/io";
import '../styles/form/form.css';

const Form = () => {
  const [userIcon, setUserIcon] = useState(false);
  const [emailIcon, setEmailIcon] = useState(false);


  return (
    <form action="/TEST" method='POST'>
      <div className="area_input">
        {/* Primeira coluna */}
        <div className="input_data">
          <div className="label_position">
            <label htmlFor="name_user">Nome</label>
            <IoMdArrowDropdown size={32} className="icon_arrow_indicator" />
          </div>
          <div className="input_display">
            <input 
              type="text" 
              required 
              name='name_user' 
              onFocus={() => setUserIcon(true)}
              onBlur={() => setUserIcon(false)}
              placeholder='Seu primeiro nome' 
              id='name_input'
            />
            {userIcon
              ? <FaUser size={21.4} className="icons_styling"/>
              : <FaRegUser size={21.4} className="icons_styling"/>
            }
          </div>

          <div className="label_position">
            <label htmlFor="email_user">Email</label>
            <IoMdArrowDropdown size={32} className="icon_arrow_indicator" />
          </div>
          <div className="input_display">
            <input 
              type="email" 
              required 
              name="email_user" 
              onFocus={() => setEmailIcon(true)}
              onBlur={() => setEmailIcon(false)}
              placeholder='Seu E-mail' 
              id="email_input" 
            />
            {emailIcon
              ? <HiOutlineMailOpen size={21.4} className="icons_styling"/>
              : <HiOutlineMail size={21.4} className="icons_styling"/>
            }
          </div>
        </div>

        <div className="input_data">
          <div className="label_position">
            <label htmlFor="cell_phone_input">Telefone</label>
            <IoMdArrowDropdown size={32} className="icon_arrow_indicator" />
          </div>
          <div className="input_display">
            <input 
              type="tel" 
              required 
              placeholder="Seu número para contato"
              name="cell_phone_input" 
              id="cell_phone_input" 
            />
          </div>
          
          <div className="label_position">
            <label htmlFor="file_user">Anexar arquivo</label>
          </div>
          <div className="input_display">
            <input 
              type="file" 
              accept=".png,.jpg,.pdf,.doc" 
              name="file_user" 
              id="file_user_input" 
            />
          </div>

          <div className="label_position">
            <label htmlFor="text_Area_User">Deixe sua mensagem</label>
          </div>
          <div className="input_display">
            <textarea 
              name="text_Area_User" 
              id="textarea_box"
              rows="4"
            ></textarea>
          </div>

          <div className="label_position">
            <label htmlFor="reason_to_be_here">Motivo da mensagem</label>
          </div>
          <div className="input_radio_area">
            <div className="radio_option">
              <input type="radio" name="reason" id="reason_trabalho" value={'Trabalho'} />
              <label htmlFor="reason_trabalho">Trabalho</label>
            </div>
            
            <div className="radio_option">
              <input type="radio" name="reason" id="reason_conhecer" value={'te conhecer'} />
              <label htmlFor="reason_conhecer">Te conhecer</label>
            </div>
            
            <div className="radio_option">
              <input type="radio" name="reason" id="reason_outro" value={'Outro'} />
              <label htmlFor="reason_outro">Outro</label>
            </div>
          </div>
        </div>
      </div>

      <div className="btn_submit">
        <button>Enviar</button>
      </div>
    </form>
  );
}

export default Form;