import React from 'react'
import Main from '../../components/Main'
import Button from '../../components/Button'

const Home = ({open, setOpen}) => {
    function onModal(){
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
    </Main>
  )
}

export default Home
