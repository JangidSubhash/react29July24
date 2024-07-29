import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

// RFC
function App() {
  // states/variable

  // hook variable
  const [studentName, setStudentName] = useState('subh')

  // function

  // let create a function using fat arraow

  let studenFun = () => {
    console.log(studentName);
  }

  // return
  return (
    <div className="App">
      <form>
        <label>Enter your Student Name:
          <input type="text" value={ studentName } onChange={ (e)=> { setStudentName(e.target.value) } } />
        </label>
        <input type="button" onClick={studenFun} name="studentName" value="Save" />
    </form>
    </div>
  );
}

export default App;
