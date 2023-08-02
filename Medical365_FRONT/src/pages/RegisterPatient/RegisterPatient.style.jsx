import styled from 'styled-components'

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px 2%;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const InputGroup = styled.div`
  margin-top: 5px;
`;

export const Label = styled.label`
  margin-bottom: 5px;
`;

export const Error = styled.div`
  color: #f13636;
  font-size: 80%;
`;