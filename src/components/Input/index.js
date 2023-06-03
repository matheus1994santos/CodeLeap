import React from 'react'
import { StyledInput } from './styles'

const Input = ({typeInput = 'text', variant = 'text', ...otherProps}) => {
  return (
    <StyledInput 
        type={typeInput}
        variant={variant}
        typeInput={typeInput}
        {...otherProps}
    />
  )
}

export default Input;