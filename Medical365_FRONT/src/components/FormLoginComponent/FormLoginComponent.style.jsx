import styled from 'styled-components'

export const Form = styled.form`
  display: inline-flex;
  padding: 0 4rem;
  flex-direction: column;
  justify-content: center;
  min-width: 40vw
`;
export const Header = styled.div``;

export const InputGroup = styled.div`
  display: inline-flex;
  flex-direction: column;
  width: 100%;
`;
export const Button = styled.button`
  border-radius: 5px;
  margin: 1rem 0;
  width: 100%;
  &:hover {
    background-color: var(--blue-200);
  }
`;

export const Action = styled.div`
  cursor: pointer;
  &:hover {
    color: var(--blue-400);
  }
`;