import React, { useState } from 'react'

import PageModal from '../PageModal'
import Input from '../Input'
import Modal from '../Modal'
import FormPost from '../../feature/FormPost'


const ModalSignIn = ({setOpen, open, inName, setInName, ...otherProps}) => {
  const[ openForm, setOpenForm ] = useState(false);
  function onForm(){
    {(openForm !== '') && (inName.length >= 2) && setOpenForm(!openForm)}
  }

  function onClose(e){
    { 
      e.target.localName === 'section' && 
      !openForm &&
      setOpen(!open) 
    }
   }


  return (
    <PageModal {...otherProps} onClick={onClose}>
        <Modal 
          title='Welcome to CodeLeap network!' 
          id='Modal'
          style={{display: openForm ? 'none' : 'flex'}}
        > 
          <p>Please enter your username</p>
          <Input 
            placeholder='Ex: John doe'
            value={inName}
            onChange={({target}) => setInName(target.value)}
          />
          <div style={{display:'flex', justifyContent: 'flex-end'}}>
            <Input 
                value='Enter' 
                typeInput='submit'
                onClick={onForm}
            />
          </div>
        </Modal>
        <FormPost
          User={inName}
          Display={openForm}
        />
    </PageModal>
  )
}

export default ModalSignIn