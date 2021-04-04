import React from 'react';
import './App.css';
import ParentComponent from './Containers/ParentComponent'
import Signup from './Signup'
// import SignIn from './SignIn'

function App() {
  return (
    <div className="App">
      {/* <SignIn/> */}
      <Signup/>
      {/* <ParentComponent/> */}
    </div>
  );
}

export default App;
