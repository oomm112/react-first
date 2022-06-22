import React, {useContext, useEffect, useState} from 'react';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderButton.module.css';
import CartContext from '../../../store/cart-context';

const HeaderButton = (props) => {
  const [btnEffect, setBtnEffect] =useState(false);
  const cartCtx = useContext(CartContext);
  const {items} = cartCtx;
  const btnClasses = `${classes.button} ${btnEffect ? classes.bump : ''}`;

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  //아이템 추가시 효과
  useEffect(() => {
    if(cartCtx.items.length === 0){
      return;
    }
    setBtnEffect(true);

    const timer = setTimeout(() => {
      setBtnEffect(false);
    }, 300);

    //cleanup
    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onConfirm}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>
        {numberOfCartItems}
      </span>
    </button>
  );
};

export default HeaderButton;
