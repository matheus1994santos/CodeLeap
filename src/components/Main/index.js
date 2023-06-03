import React from 'react'

import { StyledMainContainer } from './styles'

const Main = ({children, ...outherProps}) => {
  return (
    <StyledMainContainer {...outherProps}>
        {children}
    </StyledMainContainer>
  )
}

export default Main;