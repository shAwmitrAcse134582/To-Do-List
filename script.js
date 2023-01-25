//*creating element
const divElement = document.createElement('div');
divElement.className = 'red';
divElement.setAttribute('id', 'red');
divElement.setAttribute('title', 'Red Div');

// const container = document.querySelector('.todo-list');
// const h2Element = container.querySelector('h2');
// container.insertBefore(divElement, h2Element);

const container = document.querySelector('.todo-list');
container.appendChild(divElement);