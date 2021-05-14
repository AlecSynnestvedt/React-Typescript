import React from 'react';
import Clock from './components/Clock';
import './App.css';

let testProp: string = 'Am I getting passed to the clock component?'
let optionalProp: string = 'You sure are!'

const App: React.FunctionComponent = () => {
  return (
    <div className="App">
     <div className="verticalCenter">
        <Clock testProp={testProp} optionalProp={optionalProp}/>
     </div>
    </div>
  );
}

export default App;
