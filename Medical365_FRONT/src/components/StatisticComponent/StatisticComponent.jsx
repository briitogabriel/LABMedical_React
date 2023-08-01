import * as Styled from './StatisticComponent.style';
import { IoPeopleCircleOutline } from 'react-icons/io5'

export const StatisticComponent = () => {
  return (
    <Styled.CardMain>
      <Styled.CardHeader>
        <IoPeopleCircleOutline  size={45}/>
        <h1>99</h1>
      </Styled.CardHeader>
      <h3>Pacientes</h3>
    </Styled.CardMain>
  )
}
