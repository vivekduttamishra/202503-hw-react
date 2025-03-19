import React from 'react';
import { createRoot } from 'react-dom/client';

console.log('Hello HTML');

let root =document.getElementById('root');

//let header=document.createElement('h1');
//header.textContent = 'Hello from JS';
//root.appendChild(header);

let header= React.createElement('h1',null,'Hello From React');

createRoot(root).render(header);