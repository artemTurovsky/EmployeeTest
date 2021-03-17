import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Switch, Route } from 'react-router-dom'
import { Employee } from './redux/types'
import NavBar from './components/NavBar/NavBar';


function App() {
  const [rolesArr, setRolesArr] = useState(null);
  const [emploeesArr, setEmploeesArr] = useState(null)


  useEffect(() => {
    // достаем и джсона роли и создаем массив из ролей, без повторения для рендера в поиске
  }, [])
  const employees = useSelector((state: Employee[]) => state)
  console.log(employees)
  return (
    <>
      <NavBar />
      <Switch>
        <Route path='/'>

        </Route>
        <Route path='/edit'>
          
        </Route>
        <Route path='/create'>
          
        </Route>
        <Route path='*'>
          // Тут 404
        </Route>
      </Switch>
    </>
  );
}

export default App;
