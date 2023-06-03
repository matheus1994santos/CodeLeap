import React from 'react'

import Card from '../../components/Card'
import PageModal from '../../components/PageModal'

const ModalEdit = ({onEdit, onCancel, children}) => {


  return (
    <PageModal blur={0.3}>
        <Card 
          variant='edit' 
          style={{background: 'white'}}
          onCancel={onCancel}
          onClickEdit={onEdit}
        >
          {children}
        </Card>
    </PageModal>
  )
}

export default ModalEdit