// REACT & NODE MODULES
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import { Provider } from 'react-redux';
// STYLE
import './_static/index.css';
// COMPONENTS
import App from './components/App';
import store, {history} from './store'

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={App}>
        {/* <IndexRoute component={App} /> */}
      </Route>
    </Router>
  </Provider>
)

ReactDOM.render(router, document.getElementById('root'));
