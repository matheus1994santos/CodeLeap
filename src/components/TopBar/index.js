import React from 'react'
import { StyledHeader } from './styles';

const TopBar = ({title = ''}) => {
  return (
    <StyledHeader>
      <h3>{title}</h3>
    </StyledHeader>
  )
}

export default TopBar;