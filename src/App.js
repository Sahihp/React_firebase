import React from 'react';
import './App.css';
import Header from './components/header/Header';
import { BrowserRouter , Route } from 'react-router-dom';
import Home from './components/home/Home';
import About from './components/about/About';
import Posts from './components/posts/Posts';
import firebase from './firebase';
import Signup from './components/auth/signup/SIgnup';
import Login from './components/auth/login/Login';
import ProtectedRoute from './ProtectedRoute';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="main">
        
          <ProtectedRoute exact path = "/" component={Home} />
          <ProtectedRoute exact path = "/about" component={About} />
          <ProtectedRoute path = "/posts" component={Posts} />
          {/* <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route path="/posts" component={Posts} /> */}
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
