import React from 'react';

import {Link,Route,Switch} from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Category from './components/Category';
import Tag from './components/Tag';

function App() {
  return (
    <div>
      <h1>Welcome to react app</h1>
    <div>
    <Link to="/">Root-app</Link><br></br>
      <Link to="/home">Home</Link> <br></br>
      <Link to="/about">About</Link><br></br>
      <Link to="/category">Category</Link> <br></br>
      <Link to="/tag">Tag</Link> 
     
      </div>
      <Switch>
        <Route component={Home} exact path="/home" />
        <Route component={About} exact path="/about" />
        <Route component={Category} exact path="/category" />
        <Route component={Tag} exact path="/tag" />
      </Switch>
    </div>
  );
}

export default App;
