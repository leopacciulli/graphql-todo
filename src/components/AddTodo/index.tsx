import { useState } from 'react';
import { Mutation } from 'react-apollo';

import { addTodo, getTodos } from '../../utils/queries';

import {
  Container,
  Input,
  Button
} from './styles'

export const AddTodo = () => {
  const [textValue, setTextValue] = useState('');

  const handleChange = (e: any) => {
    setTextValue(e.target.value);
  }

  const handleSubmit = (todo: any) => {
    if (textValue) {
      setTextValue('');
      todo({ variables: { text: textValue, user: 'Leonardo Pacciulli' }, refetchQueries: [{ query: getTodos }] });
    }
  }

  return ( 
    <Mutation mutation={addTodo}>
       {(insert_todos: any, { data }: any) => (
         <form onSubmit={e => {
           e.preventDefault();
            handleSubmit(insert_todos);
          }}>
            <Container>
              <Input placeholder='Add new todo...' type="text" onChange={handleChange} value={textValue} />
              <Button type="submit">Adicionar</Button>
            </Container>
          </form>
      )}
    </Mutation>
  )
}