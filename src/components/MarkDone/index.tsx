import { Mutation } from 'react-apollo';
import { markTodo, getTodos } from '../../utils/queries';
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
      {(update_todo: any, { data }: any) => {
        if (done) {
          return <AlreadyDone> Already done </AlreadyDone>
        }

        return (
          <Done
            onClick={(e) => {
              update_todo({ variables: { id }, refetchQueries: [{ query: getTodos }] })}
            }
          >
            Check
          </Done>
        )
      }}
    </Mutation>
  )
}