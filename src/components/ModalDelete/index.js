import React from 'react'
import PageModal from '../PageModal'
import Card from '../Card'

const ModalDelete = ({onDelete, onCancel}) => {


  return (
    <PageModal blur={0.6}>
        <Card 
          variant='delete' 
          style={{background: 'white'}}
          onCancel={onCancel}
          onClickPost={onDelete}
        />
    </PageModal>
  )
}

export default ModalDelete
