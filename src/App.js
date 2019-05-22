import React from 'react';
import './App.css';
import Header from './components/header/Header';
import { BrowserRouter , Route } from 'react-router-dom';
import Home from './components/home/Home';
import About from './components/about/About';
import Posts from './components/posts/Posts';
import firebase from './firebase';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="main">
        
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route path="/posts" component={Posts} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
