import { Mutation } from 'react-apollo';
import { deleteTodo, getTodos } from '../../utils/queries';
import { Delete } from './styles';

interface DeleteProps {
  id: number
}

export const DeleteTodo = ({
  id
}: DeleteProps) => {
  return (
    <Mutation mutation={deleteTodo}>
      {(delete_todo: any, { data }: any) => (
        <Delete
          onClick={(e) => {
            delete_todo({ variables: { id }, refetchQueries: [{ query: getTodos }] })}
          }
        >
          Delete
        </Delete>
      )}
    </Mutation>
  )
}