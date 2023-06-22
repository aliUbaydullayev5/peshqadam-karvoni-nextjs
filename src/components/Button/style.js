import styled from 'styled-components'

const ButtonComponent = styled.button`
  padding: ${({padding})=> padding ? padding : '15px 50px'};
  margin: ${({margin})=> margin ? margin : '20px'};
  background: ${({bc})=> bc ? bc : '#E6ECED'};
  border: 0;
  cursor: pointer;
  width: ${({width})=> width && width};
  height: ${({height})=> height && height};
  font-weight: 500;
  font-size: 16px;
  line-height: 30px;
  color: #000000;
  display: flex;
  align-items: center;
  gap: 10px;
  
`

export default ButtonComponent