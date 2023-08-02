import styled from 'styled-components'

export const App = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background-color: #efefef;
`;

export const Main = styled.main`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  height: 100%;
`;

export const Header = styled.header`
  height: 50px;
  background-color: var(--blue-300);
  color: #FFF;
  width: 100%;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const Content = styled.div`
  display: flex;
  height: calc(100vh - 50px);
  overflow: auto;
  padding-bottom: 30px;
  justify-content: center;
  background-color: #fff;
  color: #666;
  flex: 1;
  width: 100%;
`