import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './Routes';
import rootReducer from './redux/reducers/rootReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from './redux/middlewares/logger';
import { createStore, applyMiddleware, compose } from 'redux';
import * as serviceWorker from './serviceWorker';

const store = createStore(rootReducer, compose(
  applyMiddleware(thunk, logger),
  //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

ReactDOM.render(
<Provider store={store}>
<Routes />
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
