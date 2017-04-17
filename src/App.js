import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { combineReducers } from 'redux';

import Perf from 'react-addons-perf';

import { modelReducer, formReducer } from 'react-redux-form';

import MyForm from './MyForm';
import './App.css';

const rootReducer = combineReducers({
  user: modelReducer('user'),
  userForm: formReducer('user'),
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

window.Perf = Perf;

class App extends React.Component {
  render() {
    return (
      <Provider store={ store }>
        <MyForm />
      </Provider>
    );
  }
}

export default App;
