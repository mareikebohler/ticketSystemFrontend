
import './App.css';
import * as React  from 'react';
import Line from './components/Line/Line.js';
import Header from './components/Header';
import Login from './components/Login/Login'
import useToken from './components/Login/useToken';
import getLineData from './components/Line/getData';

function App() {
  const { token, setToken } = useToken();

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="App">
        <Header></Header>
        <Line data={getLineData('1234')}></Line>
    </div>
  );
}

export default App;
