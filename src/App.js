import React from 'react';
import './App.css';
// import Counter from './Counter'
import Employee from './Employee';

function App() {
  const employeeInfo = [
    {
      id: "0",
      firstName: 'jack',
      age: "32"
    },
    {
      id: "1",
      firstName: 'bob',
      age: "32"
    },
    {
      id: "2",
      firstName: 'bill',
      age: "32"
    },
  ]
  return (
    <div className="App">
      <header className="App-header">
        <h2>Welcome to the React Counter!</h2>
        {/* <Counter /> */}
        {/* <Employee firstName="jason" id="0" age="20"/>
        <Employee firstName="fred" id="1" age="21"/>
        <Employee firstName="bob" id="2" age="23"/> */}
        {/* ^ this works but theres a better way of calling it multiple times */}

        {/* so for better way, we should store employee data somewhere else, from backend or something */}
        {/* in our case, we just make a const with our employyee info */}
        {/* then we can use something called a map (written in JS) - similar to forEach loop, it returns each component that we created inside of it */}
        {
          employeeInfo.map(employee =>{
            const {id, firstName, age} = employee;
            return (
              <Employee firstName={firstName} id={id} age={age}/>
            )
          })
        }
        {/* could also use a spread */}

      </header>
    </div>
  );
}

export default App;
