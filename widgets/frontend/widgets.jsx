import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock';

document.addEventListener('DOMContentLoaded', () =>{
  const root = document.getElementById('root');
  ReactDOM.render(
    <div><Clock /><h1>Hello World!</h1></div>,root);
});
