import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { createRoot } from 'react-dom/client';
import App from './components/App.jsx';
// import 'bootstrap/dist/css/bootstrap.min.css';



const root = createRoot(
  document.getElementById('app')
);

root.render(<App />);
// root.render(<h1>Child Text</h1>);