import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { LoginButton } from './components/Login';
import { AddTodo } from './components/AddTodo';
import { Todos } from './components/Todos';
import { Header } from './components/Header';
import GlobalStyle from './global';

const client = new ApolloClient({  
  uri: "https://sincere-lemur-91.hasura.app/v1/graphql",
  headers: {
    'x-hasura-access-key': `S1rBODSfZi1ZirA5i0htiUlOlocqhkoUl3EkXflSCX0YfCYDCxMmr7yEPBMHwyIC`
  }
});

export const App = () => {

  return (
    <ApolloProvider client={client}>
      <Header />
      <div style={{
        maxWidth: 920,
        marginTop: 16,
        margin: '0 auto',
      }}>
        <AddTodo />
        <Todos />
        <LoginButton />
      </div>

      <GlobalStyle />
    </ApolloProvider>
  );
}