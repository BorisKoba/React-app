import React from 'react';

import './App.css';
import { CounterMultiply } from './components/CounterMultiplay';
import { CounterSquare } from './components/CounterSquare';
import { CounterUpdater } from './components/CounterUpdater';
import { Timer } from './components/Timer';
import { useSelector } from 'react-redux';
import { Logout } from './components/logout';
import { Login } from './components/login';
function App() {
  const authUser = useSelector<any,string>(state=>state.auth.authUser)

  return <div style={{display:'flex', alignItems:'center',flexDirection:'column'}}>
   {authUser && <CounterUpdater operand={10}/>}
   {authUser.includes('admin') && <CounterMultiply factor={2}/>}
    {authUser &&<CounterSquare/>}
    {authUser && <Logout/>}
    {!authUser && <Login/>}

  </div>
}

export default App;