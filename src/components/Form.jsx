import { useState } from "react";
import { FaRegUser } from "react-icons/fa6";  <FaRegUser /> // normal user
import { FaUser } from "react-icons/fa6"; <FaUser /> // focus user
// User icons

import { HiOutlineMail } from "react-icons/hi"; <HiOutlineMail /> // close email
import { HiOutlineMailOpen } from "react-icons/hi"; <HiOutlineMailOpen /> // open email
// Email icons

import { PiEyeClosedDuotone } from "react-icons/pi"; <PiEyeClosedDuotone />  // close eye PI
import { PiEyeDuotone } from "react-icons/pi"; <PiEyeDuotone /> // open eye
// Password icons

import '../styles/form/form.css'




const Form = () => {

  const [userIcon, setUserIcon] = useState(false)
  const [emailIcon, setEmailIcon] = useState(false)
  const [passwordIcon, setPasswordIcon] = useState(false)


  return (
       <>
         <form action="/TEST" method='POST'>
          <div className="area_input">
            <div className="input_data">
              <label htmlFor="name_user">Nome</label>
              <input type="text" required name='name_user' onClick={() => setUserIcon(!userIcon)}  placeholder='Seu primeiro nome' id='name_input'/> 
               {
                userIcon
                ? <FaUser />
                : <FaRegUser />
               }

              <label htmlFor="email_user">Email</label>
              <input type="email" required name="email_user" onClick={() => setEmailIcon(!emailIcon)} placeholder='Seu E-mail' id="email_input" /> 
              {
                emailIcon
                ? <HiOutlineMailOpen />
                : <HiOutlineMail />
              }
            </div>

            <div className="input_data">
              <label htmlFor="cell_phone_input">Telefone</label>
              <input type="tel" required name="cell_phone_input" id="cell_phone_input" />

              <label htmlFor="file_user"Anexar arquivo></label>
              <input type="file" accept=".png,.jpg,.pdf,.doc" name="file_usesr" id="file_user_input" />l
            </div>
          </div>

            
         </form>
       </>
  )
}

export default Form