import styled from 'styled-components'
import img8 from '../../assets/png/img8.png'
import img7 from '../../assets/png/img7.png'

const Container = styled.div`
  padding: 20px var(--mainPadding);
  
`
Container.TopSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.7fr;
  border: 2px solid #D8A66F;
  padding: 1px;
  .titleBlock{
    padding: 5rem;
  }
  .title{
    font-weight: 700;
    font-size: 64px;
    line-height: 125%;
    color: #01444F;
    max-width: 530px;
  }
  .imgBlock{
    background-image: url(${img7.src});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    
  }
`
Container.BottomSection = styled.div`
  margin-top: 50px;
  display: flex;
  flex-flow: row nowrap;
  height: 600px;
  gap: 50px;
  .img{
    width: 100%;
    height: 100%;
  }
  .right{
    width: 100%;
    min-width: 400px;
    height: 100%;
    background: #02926C;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    padding: 0 35px;
  }
  .title{
    font-weight: 500;
    font-size: 30px;
    line-height: 150%;
    color: #FDFDFD;
  }
  .line{
    width: 50px;
    height: 3px;
    background-color: #01444F;
  }
  .desc{
    font-weight: 400;
    font-size: 18px;
    line-height: 150%;
    color: #FDFDFD;
  }
`
Container.BottomLeftBackImg = styled.div`
  width: 100%;
  min-width: 400px;
  height: 100%;
  background-image: url(${img8.src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`
Container.Line = styled.div`
  width: 100%;
  height: 3px;
  background-color: #000;
  margin: 100px 0 0 0;
`

export default Container