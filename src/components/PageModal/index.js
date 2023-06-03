import React from 'react'
import { StyledPageModal } from './styles'

const PageModal = ({children, blur, ...otherProps}) => {
  return (
    <StyledPageModal blur={blur} {...otherProps}>
        {children}
    </StyledPageModal>
  )
}
export default PageModal