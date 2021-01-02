/* const element = document.createElement('h1');
element.innerText = 'Hello, from React';
const container = document.getElementById('app');
container.appendChild(element); */

import React from 'react';
import ReactDOM from 'react-dom'

/* const element = <h1>Hello, Platzi </h1>; */

const jsx=(
<div>
    <h1>Hola, Soy Marcela Neira</h1>
    <p>Soy Desarrolladora Web</p>
</div>
);

const element = React.createElement(
    'div',
    {},
    React.createElement('h1',{},'Hola Soy Marcela'),
    React.createElement('p',{},'Soy Ama de casa')
)
const container = document.getElementById('app');

//ReactDOM.render(__qué__, __donde__)
ReactDOM.render(element,container)