import styled from 'styled-components'

const Container = styled.div`
  margin: 100px 0 0 0;
  padding: 0 var(--mainPadding);
  display: flex;
  flex-direction: column;
  gap: 30px;
  .title{
    color: #162022;
    font-size: 32px;
    font-weight: 500;
    line-height: 68px;
  }
  .container{
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }
  .logo{
    transition: .2s;
    :hover{
      transform: scale(1.1);
    }
  }
`


export default Container