import { Mutation, MutationFunction } from 'react-apollo';
import { checkTodoService } from '../../services/checkTodo';
import { markTodo } from '../../utils/queries';
import { Done, AlreadyDone } from './styles';

interface MarkDoneProps {
  id: number
  done: boolean
}

export const MarkDone = ({
  id,
  done
}: MarkDoneProps) => {
  return (
    <Mutation mutation={markTodo}>
      {(check_todo: MutationFunction, { data }: any) => {
        if (done) {
          return <AlreadyDone> Already done </AlreadyDone>
        }

        return (
          <Done onClick={(e) => { checkTodoService(check_todo, id) }}>
            Check
          </Done>
        )
      }}
    </Mutation>
  )
}