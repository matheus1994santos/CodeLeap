import React from 'react'
import { MdOutlineDeleteForever } from 'react-icons/md';
import { BiEdit } from 'react-icons/bi';
import { StyledContainer } from './styles';

const IconButton = ({Icon, name, call, size = 20, ...otherProps}) => {
  return (
    <StyledContainer onClick={call} name={name} {...otherProps}>
        { Icon === '' && null }
        { Icon === 'delete' && <MdOutlineDeleteForever  fontSize={size}/> }
        { Icon === 'edit' && <BiEdit fontSize={size}/> }
    </StyledContainer>
  )
}

export default IconButton;