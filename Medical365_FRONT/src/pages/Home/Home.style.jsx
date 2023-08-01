import styled from 'styled-components'

export const Homepage = styled.div`
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