import React from 'react';
import ReactDOM from 'react-dom';
import Badge from './components/Badge';

const container = document.getElementById('app');

ReactDOM.render(<Badge 
    firstName='Marcela'
    lastName='Neira'
    title='Web Development'
    twitter='marcela.code'/>,container)