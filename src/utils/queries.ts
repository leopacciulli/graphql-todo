import gql from 'graphql-tag';

export const markTodo = gql`
  mutation($id: Int!) {
    update_todos(
      where: { id: {_eq: $id} } 
      _set: { done: true }
      ) {
      affected_rows
    }
  }
`;

export const getTodos = gql`
  query { 
    todos {
      id
      text
      user
      done
    }
  }
`;

export const addTodo = gql`
  mutation($text: String!, $user: String!) {
    insert_todos (
      objects: [
          {
            text: $text,
            user: $user,
            done: false
          }
        ]
    ) {
      affected_rows
    }
  }
`;

export const deleteTodo = gql`
  mutation($id: Int!) {
    delete_todos (
      where: {id: {_eq: $id}}
    ){
      affected_rows
    }
  }
`;