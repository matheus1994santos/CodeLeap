import React from 'react'
import { StyledButton } from './styles'

const Button = ({children,  variant = 'text', ...otherProps}) => {
  return (
    <StyledButton {...otherProps} variant={variant}>
      {children}
    </StyledButton>
  )
}

export default Button;