import React from 'react'
import { StyledFormContainer } from './styles'

const Form = ({children}) => {
  return (
    <StyledFormContainer onSubmit={(e) => e.preventDefault()}>
        {children}
    </StyledFormContainer>
  )
}

export default Form;