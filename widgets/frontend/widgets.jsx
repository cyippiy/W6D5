import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock';
import Tab from './tab';

document.addEventListener('DOMContentLoaded', () =>{
  const timer = document.getElementById('timer');
  const tabs = document.getElementById('tabs');
  ReactDOM.render(
    <div><Clock /></div>,timer);
  ReactDOM.render(
    <div><Tab /></div>,tabs);
  }
);
