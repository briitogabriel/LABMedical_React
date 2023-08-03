import styled from 'styled-components'

export const PatientInput = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 15px;
  justify-content: space-between;
`;

export const InputText = styled.input`
  width: 80%;
  padding: 5px;
`;

export const SearchButton = styled.button`
  border: 1px solid black;
  border-radius: 5px;
  background-color: var(--blue-200);
  width: 18%;
  &:hover {
    background-color: var(--blue-300);
  }
`;

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