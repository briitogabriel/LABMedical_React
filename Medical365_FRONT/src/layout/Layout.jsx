import { useState } from 'react';
import { Outlet } from 'react-router';

import * as Styled from './Layout.style';
import ToolbarComponent from '../components/ToolBarComponent/ToolbarComponent';
export const Layout = () => {
  const [menuOpen, setMenuOpen] = useState(true);

  return(
    <Styled.App>
      {/* NavSidebarComponent */}
      <Styled.Sidebar $open={menuOpen}>
        a 

        <button onClick={() => {setMenuOpen(!menuOpen)}}>
          { menuOpen ? '<' : '>' }
        </button>
      </Styled.Sidebar>

      <Styled.Main>
          {/* HeaderComponent */}
          <Styled.Header>
            <ToolbarComponent />
          </Styled.Header>

          {/* Componente de pagina */}
          <Styled.Content>
            <Outlet />
          </Styled.Content>

        {/* FooterComponent*/}
        <Styled.Footer>m</Styled.Footer>
      </Styled.Main>
    </Styled.App>
  );
}
