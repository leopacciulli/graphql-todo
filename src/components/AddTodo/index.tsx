import { useState } from 'react';
import { Mutation, MutationFunction } from 'react-apollo';
import { addTodoService } from '../../services/addTodo';
import { addTodo } from '../../utils/queries';

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

  const handleSubmit = (todo: MutationFunction) => {
    if (textValue) {
      setTextValue('');
      addTodoService(todo, textValue, 'Leonardo Pacciulli');
    }
  }

  return ( 
    <Mutation mutation={addTodo}>
       {(insert_todos: MutationFunction, { data }: any) => (
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