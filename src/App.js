import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';

import Button from './components/Button'
import Main from './components/Main'
import ModalSignIn from './components/ModalSignIn'
import { loadName } from './slice';

export default function App(){
  const [ open, setOpen ] = useState(false);
  const [ inName, setInName ] = useState('');
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(loadName({ name: inName }));
  })

  function onModal(e){
    setOpen(!open);
  }

  return (
    <Main>
      <Button  
        variant='text'
        style={{fontSize: 18}}
        onClick={onModal}
      >
        <h1>codeleap</h1>
      </Button>
      <ModalSignIn    
        open={open}
        setOpen={setOpen}
        inName={inName}
        setInName={setInName}
        style={{
          display: open ? 'flex' : 'none'
        }}
      />
    </Main>
  )
}