import styled from 'styled-components'

const Container = styled.div`
  background: linear-gradient(277.14deg, #01353D 1.82%, #005260 100.17%);
  padding: 111px var(--mainPadding);
  display: flex;
  flex-direction: column;
  gap: 20px;
  .title{
    font-weight: 500;
    font-size: 54px;
    line-height: 68px;
    color: #D8A66F;
  }
  .description{
    font-weight: 400;
    font-size: 18px;
    line-height: 135%;
    color: #FDFDFD;
    max-width: 965px;
  }
`
Container.Inset = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  
`
const Section = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  .imgBlock {
    grid-column: ${({position}) => position === 'left' ? '1/2' : '2/3'};
    grid-row: 1/2;
  }
  .textBlock {
    padding: 40px 30px;
    grid-row: 1/2;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  .title{
    font-weight: 400;
    font-size: 28px;
    line-height: 135%;
    color: #D8A66F;
  }
  .desc{
    font-weight: 400;
    font-size: 18px;
    line-height: 150%;
    color: #FFFFFF;
  }
  .img{
    width: 100%;
  }
  .link{
    position: absolute;
    bottom: 20px;
    color: #D8A66F;
    font-size: 16px;
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    width: 120px;
    transition: 0.2s;
    :hover{
      gap: 20px;
    }
  }
`


export {Section}
export default Container