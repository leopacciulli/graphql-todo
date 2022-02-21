import { MutationFunction } from "react-apollo";
import { getTodos } from "../utils/queries";

export const addTodoService = (todo: MutationFunction, text: string, user: string) => {
  todo({ variables: { text, user }, refetchQueries: [{ query: getTodos }] });
}