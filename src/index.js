import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import 'semantic-ui-css/semantic.min.css';
import registerServiceWorker from './registerServiceWorker';
import { ConnectedRouter } from 'connected-react-router';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store , history } from './components/Store'

const Index = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>
  </BrowserRouter>
)

ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();
