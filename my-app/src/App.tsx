import React from 'react';
import logo from './logo.svg';
import './App.css';
import Head from './components/Head';
import { Button } from './components/Button';
import { Input } from './components/Input';

function App() {
  return (
    <div className="App">
      <Head title="Hello TypeScript" status="loaded" />
      <Button onClick={(e) => {
        e.preventDefault();
        console.log(e);
        // return "hello" //if we have void we don't even need to return something if not we have to return something
      }} >
        I am the button
      </Button>
      <Input />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
