import * as Styled from './MenuGroup.style';

export default function MenuGroup({ title, btn1, icon1, btn2, icon2, open }) {
  return (
    <>
      <Styled.Title $open={open}>{title}</Styled.Title>
      <Styled.Button $open={open}>{icon1}  {open ? `${btn1}` : ''}</Styled.Button>
      <Styled.Button $open={open}>{icon2}  {open ? `${btn2}` : ''}</Styled.Button>
    </>
  )
}
