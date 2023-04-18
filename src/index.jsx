import React from 'react'
// Méthode avec React 18
import ReactDOM from 'react-dom/client';
// Méthode avec React 17 ou avant -- import ReactDOM from 'react-dom';
import App from './App'
import { BrowserRouter /*as Router*/ } from 'react-router-dom'
 
// Méthode avec React 18

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
            <App />
    </BrowserRouter>,
);

// Méthode avec React 17 ou avant
/*
ReactDOM.render(
    <BrowserRouter>
            <App />
    </BrowserRouter>,
document.getElementById('root')
);
*/