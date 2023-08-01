import { useState } from 'react';
import * as Styled from './SidebarComponent.style';

import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { BiLogOut, BiStats, BiPlus, BiListUl } from 'react-icons/bi';

import MenuGroup from '../MenuGroup/MenuGroup';

export default function SidebarComponent() {

  const [menuOpen, setMenuOpen] = useState(true);

  return (
    <Styled.Sidebar $open={menuOpen}>
      <Styled.Img src="./images/LABMedical Logo.png" alt="LABMedical Logo" $open={menuOpen} />

      <MenuGroup title={'Geral'} btn1={{navigation:'/', text:'INÍCIO'}} icon1={<BiStats/>} btn2={{navigation:'/login', text:'SAIR'}} icon2={<BiLogOut/>} open={menuOpen}/>
      <MenuGroup title={'Pacientes'} btn1={{navigation:'/register-patient', text:'CADASTRAR'}} icon1={<BiPlus/>} btn2={{navigation:'/medical-records', text:'LISTAR PRONTUÁRIO'}} icon2={<BiListUl/>} open={menuOpen}/>
      <MenuGroup title={'Exames'} btn1={{navigation:'/register-appointment', text:'CADASTRAR CONSULTA'}} icon1={<BiPlus/>} btn2={{navigation:'/register-exam', text:'CADASTRAR EXAME'}} icon2={<BiPlus/>} open={menuOpen}/>

      <Styled.Button onClick={() => {setMenuOpen(!menuOpen)}}>
        { menuOpen ? <AiOutlineClose /> : <AiOutlineMenu /> }
      </Styled.Button>
    </Styled.Sidebar>
  )
}
