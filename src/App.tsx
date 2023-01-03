/*
 * @Author: chenjianfeng chenjianfeng93@163.com
 * @Date: 2023-01-01 10:12:44
 * @Description: 
 */
import React from 'react';
import './App.css';
import request from './hooks/useAxios'
if (process.env.NODE_ENV === 'development') {
  require('./mocks/index')
}

function App() {

  const { result } = request<any>({
    url: '/login',
    method: 'Post',
    data: {
      username: 'Jeffa',
      password: '123456'
    }
  })

  console.log(result)

  return (
    <div className="App">
      <div>123</div>
    </div>
  );
}

export default App;
