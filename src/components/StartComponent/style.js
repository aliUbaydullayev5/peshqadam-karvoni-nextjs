import styled from 'styled-components'

const Container = styled.div`
  padding: 0 var(--mainPadding);
  display: flex;
  flex-direction: column;
  gap: 30px;
  
`

Container.LogoSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 23px 0;
  position: relative;
  border: 1px solid red; 
  
`
Container.MainContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  .left{
    border-right: 1px solid black;
    padding: 20px;
  }
  .title{
    font-weight: 500;
    font-size: 64px;
    line-height: 68px;
    color: #162022;
  }
  .description{
    font-weight: 400;
    font-size: 16px;
    line-height: 135%;
    color: #162022;
    >span{
      text-transform: lowercase;
    }

  }
  .right{
    display: grid;
    grid-template-rows: 20px 1fr;
    gap: 50px;
    .top{
      display: flex;
      align-items: center;
      justify-content: space-around;
      flex-wrap: wrap;
      gap: 10px;
      padding: 0 15px;
      >p{
        cursor: pointer;
        :active{
          color: red;
        }
      }
    }
    .imgSection{
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  @media only screen and (width < 1200px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    .left{
      border: 0 !important;
      padding: 20px;
    }
  }
  @media only screen and (width < 800px) {
    .right{
      border: 1px solid red;
      gap: 0;
      grid-template-rows: 1fr;
      .top{
        display: none;
      }
      .imgSection{
      }
    }
  }
  
`

Container.Icon = styled.div`
  display: none;
  @media only screen and (width < 800px) {
    display: block;
  }
  position: absolute;
  left: 3rem;
  top: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
`
Container.Hamburger = styled.div`
  position: relative;
  display: none;
  @media only screen and (width < 800px) {
    display: block;
  }
`


export default Container