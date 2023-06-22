import React from 'react'
import ButtonComponent from './style'

const Button = ({children, margin, padding, bc, width, height}) => {
    return(
        <ButtonComponent
            margin={margin}
            padding={padding}
            bc={bc}
            width={width}
            height={height}
        >
            {children}
        </ButtonComponent>
    )
}

export default Button