import React from 'react';
import ReactDOM from 'react-dom';
import AjaxNavbar from './ajax-navbar';

let items = [
    {text:'Home',href:'/home'},
    {text:'About',href:'/about'},
    {text:'Contact',href:'/contact'}
];

ReactDOM.render(
    <AjaxNavbar url={'menu-items.json'} />,
    document.getElementById('app')
);