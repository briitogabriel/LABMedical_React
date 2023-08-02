import styled from 'styled-components'

export const Homepage = styled.div`
  padding-top: 10px;
  display: flex;
  flex-direction: column;
`;

export const StatisticCards = styled.div`
  display: flex;
  flex-direction: row;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;

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