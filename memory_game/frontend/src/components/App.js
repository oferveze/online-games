import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '../store';

import Layout from './layout/Layout'

import "../style/styles.css";

export default function App() {
    return (
        <Provider store={store}>
            <Layout />
        </Provider>
    )
}

ReactDOM.render(<App />, document.getElementById('app'));
