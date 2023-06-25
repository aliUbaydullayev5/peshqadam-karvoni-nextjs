import styled from 'styled-components'

const Container = styled.div`
  padding: 0 var(--mainPadding);
  display: flex;
  flex-direction: column;
  gap: 30px;
  @media only screen and (width < 800px) {
    gap: 0;
  }
  
`

Container.LogoSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 23px 0;
  position: relative;
  
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
    display: block;
    //grid-template-columns: 1fr;
    //grid-template-rows: 1fr 1fr;
    .left{
      border: 0 !important;
      padding: 20px;
    }
  }
  
  @media only screen and (width < 800px) {
    .right{
      gap: 0;
      grid-template-rows: 1fr;
      .top{
        display: none;
      }
    }
    .title{
      font-size: 36px;
      font-weight: 500;
      line-height: 45px;
    }
    .description{
      font-size: 16px;
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
  .closeIcon{
    position: absolute;
    top: 30px;
    right: 30px;
    cursor: pointer;
  }
`
Container.Menu = styled.div`
  padding: 60px 20px;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.78);

`
Container.MenuItem = styled.div`
  color: white;
  margin: 20px 0;
  cursor: pointer;
  transition: .2s;
  font-size: 24px;
  :hover{
    margin: 20px 0 20px 10px;
  }
`


export default Container