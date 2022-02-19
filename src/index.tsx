import ReactDOM from 'react-dom';
import { Auth0Provider } from "@auth0/auth0-react";
import { App } from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Auth0Provider
    domain="dev-r8nvzfew.us.auth0.com"
    clientId="3ObMVxId7pk4gEt57aN894eSy0oy36yw"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
