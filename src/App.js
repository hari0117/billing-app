import React, { Suspense, useContext, lazy } from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Redirect, Switch } from 'react-router-dom';
import Header from './components/Header.jsx';


function App() {
  return (
    <>

      <Router>
        <Header></Header>
        <div id="bodySection">
          <Suspense>
            <Switch>
              <Route path="/newOrder" render={() => <div>New order</div>} />
              <Route path="/addItems" render={() => <div>Add item</div>} />
              <Route path="/" render={() => <div>home</div>} />
            </Switch>
          </Suspense>
        </div>
      </Router>

    </>
  );
}

export default App;
