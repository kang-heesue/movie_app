import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './routes/Home';
import About from './routes/About';
import Detail from './routes/Detail';
import './App.css';

function App() {
  return (
    <HashRouter>
      <Nav />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie/:id" component={Detail} />
    </HashRouter>
  );
}

export default App;
