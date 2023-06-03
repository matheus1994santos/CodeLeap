import React from 'react'

import Button from '../Button'
import IconButton from '../IconcButton'

import { StyledBar, StyledCard, StyledContentButton, StyledContentIcon, StyledText, StyledUser } from './styles'

const Card = ({
  onClickDelete,
  onClickEdit,
  onClickPost, 
  onCancel, 
  children, 
  User, 
  title = 'Title', 
  variant = 'get', 
  ...otherProps
}) => {

  return (
    <StyledCard variant={variant} {...otherProps}>
        <StyledBar variant={variant}>
          {variant === 'get' && <h3>What's on you mind?</h3>}
          {variant === 'post' && <>
            <h4>{title}</h4>
            {User !== 'Equipe CodeLeap'  && <StyledContentIcon>
              <IconButton Icon='delete'  call={onClickDelete}/>
              <IconButton Icon='edit' call={onClickEdit}/>
            </StyledContentIcon>}
          </>}
          {variant === 'delete' && <h3>Are you sure you want to delete this item?</h3>}
          {variant === 'edit' && <h3>Edit item</h3>}

        </StyledBar>
          { variant === 'post' && <>
            <StyledUser>@{User}</StyledUser>
            <StyledText>{children}</StyledText>
          </> }
          { variant === 'delete' && <>
            <StyledContentButton>
              <Button variant='outline' onClick={onCancel}>Cancel</Button>
              <Button variant='delete' onClick={onClickPost}>Delete</Button>
            </StyledContentButton>
          </> }
          { variant === 'get' && <>
          {children}
          <StyledContentButton>
              <Button variant='contained' onClick={onClickPost}>Create</Button>
            </StyledContentButton>
          </> }
          { variant === 'edit' && <>
          {children}
          <StyledContentButton>
              <Button variant='outline' onClick={onCancel}>Cancel</Button>
              <Button variant='edit' onClick={onClickEdit}>Edit</Button>
            </StyledContentButton>
          </> }
    </StyledCard>
  )
}

export default Card