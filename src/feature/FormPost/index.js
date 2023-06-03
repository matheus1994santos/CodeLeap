import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectDataPost } from './selectors';

import Card from '../../components/Card';
import CommentBox from '../../components/CommentBox';
import Form from '../../components/Form';
import Input from '../../components/Input'
import ModalEdit from '../../components/ModalEdit';
import ModalDelete from '../../components/ModalDelete';
import PageModal from '../../components/PageModal';
import TopBar from '../../components/TopBar';

import { StyledContent, StyledContentCard, StyledText } from './styles';
import { addDataPost, removeDataPost, editDataPost } from './slice';


const FormPost = ({User, Display}) => {
  const [ inTitle, setInTitle ] = useState('');
  const [ inContent, setInContent ] = useState('');
  const [ newTitle, setNewTitle ] = useState('');
  const [ newContent, setNewContent ] = useState('');
  const [ openModalDelete, setOpenModalDelete ] = useState(false);
  const [ openEdit, setOpenEdit ] = useState(false);
  const [ deleteTitle, setDeleteTitle ] = useState('');
  const [ idx, setIdx ] = useState(1);

  const dispatch = useDispatch();
  const ListMessagePosts = useSelector(selectDataPost);

  function onPost(){
    let getTitle = inTitle;
    let Content = inContent;

    if((getTitle !== '') && (Content !== '')){
      dispatch(addDataPost( { id: idx, title: getTitle, content: Content }));
      setIdx(idx + 1);
      setInTitle('');
      setInContent('');
    }
  }

  function onDelete(){
    dispatch(removeDataPost({ id: deleteTitle}))
    setOpenModalDelete(!openModalDelete)
  }

  return (
    <PageModal 
      style={{
        alignItems: 'initial',
        display: Display ? 'flex' : 'none'
      }}
    >
        <Form>
            <TopBar title='CodeLeap Network'/>
            <StyledContent>
              <Card onClickPost={onPost}>
                <StyledText>
                  <p>Title</p>
                  <Input 
                    name='title'
                    placeholder='Hello World'
                    value={inTitle}
                    onChange={({target}) => setInTitle(target.value)}
                  />
                </StyledText>
                <StyledText>
                  <p>Content</p>
                  <CommentBox 
                    name='content'
                    titleButtom='Create'
                    Value={inContent}
                    getChange={({target}) => setInContent(target.value)}
                  />
                </StyledText>
              </Card>
              <StyledContentCard>
              {
                ListMessagePosts && ListMessagePosts.map(({id, title, content}, index)=>{                  
                  return <Card 
                      key={id} 
                      title={title} 
                      User={ index < 1 ? 'Equipe CodeLeap' : User} 
                      variant='post'
                      onClickDelete={() => {
                        setDeleteTitle(id);
                        setOpenModalDelete(!openModalDelete)
                      }}
                      onClickEdit={() => {
                        setOpenEdit(!openEdit)
                      }}
                    >
                      {
                        openEdit && 
                        <ModalEdit onEdit={() => {
                          dispatch(editDataPost({id:index, edit: { id: index, title: newTitle, content: newContent }}))
                          setOpenEdit(!openEdit)
                          setNewTitle('');
                          setNewContent('');
                        }} onCancel={() => { 
                          setNewTitle('');
                          setNewContent('');
                          setOpenEdit(!openEdit);
                         }}>
                          <StyledText>
                            <p>Title</p>
                            <Input 
                              name='title'
                              placeholder='Hello World'
                              value={newTitle}
                              onChange={({target}) => setNewTitle(target.value)}
                            />
                          </StyledText>
                          <StyledText>
                            <p>Content</p>
                            <CommentBox 
                              name='content'
                              titleButtom='Create'
                              Value={newContent}
                              getChange={({target}) => setNewContent(target.value)}
                            />
                          </StyledText>        
                        </ModalEdit>
                      }
                      <p>{content}</p>
                    </Card>  
                })
              }
              </StyledContentCard>
              {
                openModalDelete && 
                  <ModalDelete onDelete={onDelete} onCancel={() => setOpenModalDelete(!openModalDelete)}/>
              }

            </StyledContent>
        </Form>
    </PageModal>
  )
}

export default FormPost;