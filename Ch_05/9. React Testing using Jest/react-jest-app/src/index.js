import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';

const data = ['one', 'two', 'three']
ReactDOM.render(<List items={data} />, document.getElementById('root'));