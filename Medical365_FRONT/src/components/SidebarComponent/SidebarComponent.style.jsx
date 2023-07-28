import styled from 'styled-components'

export const Sidebar = styled.div`
  width: ${({$open}) => $open ? '20%' : '5%'};
  height: 100%;
  background-color: var(--blue-300);
  transition: width 0.5s;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  padding: 2%;
`;

export const Img = styled.img`
  height: auto;
  width: ${({$open}) => $open ? '50%' : '0%'};
  border: none;
  transition: width 0.5s;
  margin-bottom: 20%;
`;

export const Button = styled.button`
  bottom: 5%;
  position: fixed;
  color: white;
  border: 2px solid white;
  border-radius: 5px;
  background-color: var(--blue-300);
`;