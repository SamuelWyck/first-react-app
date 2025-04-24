import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Greeting from './greeting.jsx';
import Navbar from './navbar.jsx';
import "./navbar.css";

createRoot(document.querySelector("body")).render(
  <StrictMode>
    <Navbar />
    <Greeting />
  </StrictMode>,
);
