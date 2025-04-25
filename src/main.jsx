import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Greeting from './greeting.jsx';
import Navbar from './navbar.jsx';
import List from './list.jsx';
import "./navbar.css";

const list = ["green", "blue", "red", "purple", "pink"];

createRoot(document.querySelector("body")).render(
  <StrictMode>
    <Navbar />
    {/* <Greeting /> */}
    <List list={list}/>
  </StrictMode>,
);
