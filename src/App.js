//React imports
import React, {useState} from 'react';

//Component imports
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';


//CSS imports


//Main component
function App() {

  const [cartShown, setCartShown] = useState(false);

  const showCart = () => {
    setCartShown(true);
  };

  const hideCart = () => {
    setCartShown(false);
  };


  return (
    <React.Fragment>
      {cartShown && <Cart onCancel={hideCart} />}
      <Header onClick={showCart}/>
      <main>
        <Meals/>
      </main>
    </React.Fragment>
  );
}

//Exports
export default App;
