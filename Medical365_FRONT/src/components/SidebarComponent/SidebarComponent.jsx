import { useState } from 'react';
import * as Styled from './SidebarComponent.style';

import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

export default function SidebarComponent() {

  const [menuOpen, setMenuOpen] = useState(true);

  return (
    <Styled.Sidebar $open={menuOpen}>
      <Styled.Img src="./images/LABMedical Logo.png" alt="LABMedical Logo" $open={menuOpen} />

      <Styled.Button onClick={() => {setMenuOpen(!menuOpen)}}>
        { menuOpen ? <AiOutlineClose /> : <AiOutlineMenu /> }
      </Styled.Button>
    </Styled.Sidebar>
  )
}
