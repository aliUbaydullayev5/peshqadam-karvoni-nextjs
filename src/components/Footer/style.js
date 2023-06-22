import styled from 'styled-components'

const Container = styled.div`
  padding: 200px var(--mainPadding) 100px var(--mainPadding);
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 100px;
  position: relative;
  .left{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }
  .text{
    color: var(--web-site-black, #162022);
    font-size: 16px;
    cursor: pointer;
    transition: .2s;
    :hover{
      transform: scale(1.1);
    }
  }
  .right{
    max-width: 400px;
  }
  .rightText{
    color: #162022;
    font-size: 16px;
    line-height: 150%;
  }
  .rightSvgBlock{
    margin: 20px 0 0 0;
    display: flex;
    gap: 20px;
  }
  .roundBlockSvg{
    width: 50px;
    height: 50px;
    background: #E6ECED;
    border-radius: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: .2s;
    :hover{
      transform: scale(1.1);
    }
  }
  .bottom{
    margin: 100px 0 0 0;
    .title{
      color: #162022;
      font-size: 18px;
      font-weight: 500;
      line-height: 125%;
    }    
  }
  .bottomBottom{
    position: absolute;
    transform: translate(-50%, 0);
    left: 50%;
    right: 50%;
    bottom: 0;
    width: 47px;
    height: 53px;
    background: #D8A66F;
    border-top-left-radius: 250px;
    border-top-right-radius: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
`

export default Container