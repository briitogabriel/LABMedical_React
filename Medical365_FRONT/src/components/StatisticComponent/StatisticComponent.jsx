import * as Styled from './StatisticComponent.style';

  export const StatisticComponent = ({ icon, amount, statisticTitle }) => {
    const StatisticIcon = icon
  return (
    <Styled.CardMain>
      <Styled.CardHeader>
        <StatisticIcon size={45} />
        <h1>{amount}</h1>
      </Styled.CardHeader>
      <h3>{statisticTitle}</h3>
    </Styled.CardMain>
  )
}
