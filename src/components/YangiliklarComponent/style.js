import styled from 'styled-components'

const Container = styled.div`
  padding: 0 var(--mainPadding);
  .title{
    font-size: 32px;
    line-height: 68px;
    text-align: left;
    color: #162022;
  }
`
Container.Inset = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 400px);
  justify-content: space-between;
  gap: 40px;
  @media only screen and (width < 800px) {
    justify-content: center;
  }
`
Container.Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  .data{
    font-size: 14px;
    line-height: 31px;
    color: #000000;
  }
  .title{
    font-weight: 500;
    font-size: 24px;
    line-height: 31px;
    color: #162022;
  }
  .desc{
    font-weight: 400;
    font-size: 15px;
    line-height: 150%;
    color: #222222;
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
  }
`
Container.ImageBack = styled.div`
  background-image: url(${({src})=> src && src.src});
  height: 260px;
`

export default Container