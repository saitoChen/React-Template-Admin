/*
 * @Author: chenjianfeng chenjianfeng93@163.com
 * @Date: 2023-01-01 10:12:44
 * @Description: 
 */
import Login from './views/Login/index'
import React from 'react';
import './App.scss';
import './reset.scss'
import request from './hooks/useAxios'
if (process.env.NODE_ENV === 'development') {
  require('./mocks/index')
}


function App() {

  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
