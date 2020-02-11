import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import reducers from './Application/System/Redux/Reducer';
const store = createStore(reducers, applyMiddleware(thunk));

const contents = () => {
    return <App />
}

const Main = () => {
    return (
        <Provider store={store}>
            {contents()}
        </Provider>
    );
};


ReactDOM.render(<Main />, document.getElementById('root'));
serviceWorker.unregister();
