import { MutationFunction } from "react-apollo";
import { getTodos } from "../utils/queries";

export const deleteTodoService = (delete_todo: MutationFunction, id: number) => {
  delete_todo({ variables: { id }, refetchQueries: [{ query: getTodos }] })
}