import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './layout/Layout'

import "../style/styles.css";

export default function App() {
    return (
        <Layout />
    )
}

ReactDOM.render(<App />, document.getElementById('app'));
