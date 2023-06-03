import React from 'react'
import { StyledModal } from './styles'

const Modal = ({children, title = '', ...otherProps}) => {
  return (
    <StyledModal {...otherProps}>
      {title !== '' && <h3>{title}</h3>}
      {children}
    </StyledModal>
  )
}

export default Modal;