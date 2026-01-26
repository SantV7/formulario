import { HiOutlineMail } from "react-icons/hi"; <HiOutlineMail /> // close email
import { HiOutlineMailOpen } from "react-icons/hi"; <HiOutlineMailOpen /> // open email
// Email icons

import { PiEyeClosedDuotone } from "react-icons/pi"; <PiEyeClosedDuotone />  // close eye PI
import { PiEyeDuotone } from "react-icons/pi"; <PiEyeDuotone /> // open eye
// Password icons

const Form = () => {
  return (
       <>
         <form action="" method='POST'>
          <div className="area_input">
            <div className="input_data">
              <label htmlFor="name_user">Nome</label>
              <input type="text" required name='name_user' placeholder='Seu primeiro nome' id='name_input'/>

              <label htmlFor="email_user">Email</label>
              <input type="email" required name="email_user"placeholder='Seu E-mail' id="email_input" />
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