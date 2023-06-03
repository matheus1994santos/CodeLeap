import React from 'react'
import { StyledContainer } from './styles'

const CommentBox = ({children, titleButtom = 'Enter', onClickPost, getChange, Value, ...otherProps}) => {
  return (
    <StyledContainer>
        <textarea value={Value} onChange={getChange} {...otherProps}>
            {children}
        </textarea>
    </StyledContainer>
  )
}

export default CommentBox
