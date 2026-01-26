import { useState } from "react";
import { FaRegUser } from "react-icons/fa6";  <FaRegUser /> // normal user
import { FaUser } from "react-icons/fa6"; <FaUser /> // focus user
// User icons

import { HiOutlineMail } from "react-icons/hi"; <HiOutlineMail /> // close email
import { HiOutlineMailOpen } from "react-icons/hi"; <HiOutlineMailOpen /> // open email
// Email icons


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
              <div className="input_display">
                <input type="text" required name='name_user' onClick={() => setUserIcon(!userIcon)}
                  placeholder='Seu primeiro nome' id='name_input'/>
                 {
                  userIcon
                  ? <FaUser />
                  : <FaRegUser />
                 }
              </div>

              <label htmlFor="email_user">Email</label>
              <div className="input_display">
                <input type="email" required name="email_user" onClick={() => setEmailIcon(!emailIcon)} 
                placeholder='Seu E-mail' id="email_input" />
                {
                  emailIcon
                  ? <HiOutlineMailOpen />
                  : <HiOutlineMail />
                }
              </div>
            </div>

            <div className="input_data">
              <label htmlFor="cell_phone_input">Telefone</label>
              <div className="input_display"><input type="tel" required name="cell_phone_input" id="cell_phone_input" /></div>
              

              <label htmlFor="file_user"Anexar arquivo></label>
              <div className="input_display"><input type="file" accept=".png,.jpg,.pdf,.doc" name="file_usesr" id="file_user_input" /></div>
            </div>
          </div>

            
         </form>
       </>
  )
}

export default Form