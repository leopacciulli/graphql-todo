import { MutationFunction } from "react-apollo";
import { getTodos } from "../utils/queries";

export const checkTodoService = (check_todo: MutationFunction, id: number) => {
  check_todo({ variables: { id }, refetchQueries: [{ query: getTodos }] })
}