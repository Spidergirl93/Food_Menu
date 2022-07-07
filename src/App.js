//React imports
import React from 'react';

//Component imports
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';


//CSS imports


//Main component
function App() {
  return (
    <React.Fragment>
      <Header/>
      <main>
        <Meals/>
      </main>
    </React.Fragment>
  );
}

//Exports
export default App;
