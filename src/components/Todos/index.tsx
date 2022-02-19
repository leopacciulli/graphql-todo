
import { Query, QueryResult } from 'react-apollo';
import { DeleteTodo } from '../DeleteTodo';
import { MarkDone } from '../MarkDone';
import { getTodos } from '../../utils/queries';

import {
  Loading,
  Error,
  Empty,
  Todo,
  Left,
  Right,
  User,
  Text
} from './styles';

interface TodosProps {
  id: number;
  text: string;
  user: string;
  done: boolean
}

export const Todos = () => {
  return (
    <Query query={getTodos}>
      {({ loading, error, data }: QueryResult) => {
        if (loading) return (
          <Loading>Loading...</Loading>
        );

        if (error) return (
          <Error>Error to get todos, reload the page again...</Error>
        )

        if (data && data.todos.length) {
          return data.todos.map(({ id, text, user, done }: TodosProps) => {
            return (
              <Todo key={id}>
                <Left>
                  <User>{user}</User>
                  <Text>{text}</Text>
                </Left>
                <Right>
                  <DeleteTodo id={id} /> 
                  <MarkDone id={id} done={done} />
                </Right>
              </Todo>
            )
          });
        } else {
          return (
            <Empty>You don't have todos</Empty>
          )
        }
        
      }}
    </Query>
  )
}