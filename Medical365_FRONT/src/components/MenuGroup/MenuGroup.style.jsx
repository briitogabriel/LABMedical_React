import styled from 'styled-components'

export const Button = styled.button`
  color: white;
  border: 2px solid white;
  height: 2rem;
  font-size: 70%;
  background-color: var(--blue-300);
  border-radius: 5px;
  width: ${({$open}) => $open ? '90%' : ''};
`;

export const Title = styled.p`
  color: white;
  font-size: 1.5rem;
  font-weight: normal;
  margin: 0;
  display: ${({$open}) => $open ? 'flex' : 'none'};
`;