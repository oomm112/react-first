import React, {useState} from 'react';
import ReactMealHeader from './include/ReactMealHeader';
import Meals from './components/ReactMeals/Meals/Meals';
import Cart from './components/ReactMeals/Cart/Cart';
import CartProvider from './store/CartProvider';

const ReactMeal = () => {
  const [isVisible, setIsVisible] = useState(false);

  const setVisibleHandler = () => {
    if(!isVisible){setIsVisible(true);}
  };

  const closeModalHandler = () => {
    if(isVisible){setIsVisible(false)};
  };

  return(
    <CartProvider>
      {isVisible && <Cart onClose={closeModalHandler}/>}
      <ReactMealHeader onConfirm={setVisibleHandler}/>
      <main>
        <Meals/>
      </main>
    </CartProvider>
  );
};

export default ReactMeal;
