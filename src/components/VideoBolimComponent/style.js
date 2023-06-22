import styled from 'styled-components'

const Container = styled.div`
  padding: 0 var(--mainPadding);
  height: 400px;
  
`
Container.Inset = styled.div`
  
  .title{
    font-weight: 500;
    font-size: 32px;
    line-height: 68px;
    color: #162022;
  }
`
Container.SectionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`
Container.Section = styled.div`
  width: 360px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  .videoArea {
    height: 260px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .data{
    font-weight: 400;
    font-size: 14px;
    line-height: 31px;
    letter-spacing: 0.08em;
    color: #000000;
  }
  .title{
    font-weight: 500;
    font-size: 24px;
    line-height: 31px;
    color: #162022;
  }
  .linkBatafsil{
    color: #D8A66F;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 10px;
    transition: .2s;
    :hover{
      gap: 20px;
    }
`

export default Container