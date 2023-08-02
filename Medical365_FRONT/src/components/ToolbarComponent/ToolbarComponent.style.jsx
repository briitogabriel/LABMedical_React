import styled from 'styled-components'

export const Icon = styled.div`
  border-radius: 50%;
  background-color: var(--blue-100);
  height: 40px;
  width: 40px;
  border: 1px solid black;
  justify-content: center;
  display: flex;
  align-items: center;
`;

export const Nav = styled.nav`
  justify-content: space-between;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 2%;
`;

export const UserInfo = styled.div`
  justify-content: space-around;
  display: flex;
  align-items: center;
  gap: 5px;
`;