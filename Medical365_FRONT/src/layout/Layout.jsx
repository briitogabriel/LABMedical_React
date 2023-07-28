import { Outlet } from 'react-router';

import * as Styled from './Layout.style';
import ToolbarComponent from '../components/ToolBarComponent/ToolbarComponent';
import SidebarComponent from '../components/SidebarComponent/SidebarComponent';

export const Layout = () => {
  return(
    <Styled.App>
      {/* NavSidebarComponent */}
      <SidebarComponent />

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
