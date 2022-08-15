import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles/styles.css';

const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);