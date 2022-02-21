import { Mutation, MutationFunction } from 'react-apollo';
import { deleteTodoService } from '../../services/deleteTodo';
import { deleteTodo } from '../../utils/queries';
import { Delete } from './styles';

interface DeleteProps {
  id: number
}

export const DeleteTodo = ({
  id
}: DeleteProps) => {
  return (
    <Mutation mutation={deleteTodo}>
      {(delete_todo: MutationFunction, { data }: any) => (
        <Delete onClick={(e) => { deleteTodoService(delete_todo, id) }}>
          Delete
        </Delete>
      )}
    </Mutation>
  )
}