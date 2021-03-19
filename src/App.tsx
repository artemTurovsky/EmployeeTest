import React from 'react'
import { Switch, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import Main from './pages/Main/Main';
import Edit from './pages/Edit/Edit';
import Create from './pages/Create/Create';


function App() {

  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path='/'>
          <Main />
        </Route>
        <Route path='/edit/:id'>
          <Edit />
        </Route>
        <Route path='/create'>
          <Create />
        </Route>
        <Route path='*'>
          // Тут 404
        </Route>
      </Switch>
    </>
  );
}

export default App;
