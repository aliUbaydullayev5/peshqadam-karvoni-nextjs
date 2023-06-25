import styled from 'styled-components'

const Container = styled.div`
  padding: 50px var(--mainPadding);
  background: #02926C;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  .left{
    max-width: 500px;
    .title{
      font-weight: 600;
      font-size: 34px;
      line-height: 46px;
      color: #FFFFFF;
    }
    .desc{
      font-weight: 500;
      font-size: 22px;
      line-height: 30px;
      color: #FFFFFF;
    }
  }
  .right{
    
  }
  @media only screen and (width < 800px) {
    
  }
`

export default Container