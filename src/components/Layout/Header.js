import { Fragment } from 'react';
import mealImg from '../../assets/pizza.jpg';
import HeaderCartButton from './HeaderCartButton';

import classes from './Header.module.css';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Just Pizza</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={mealImg} alt='pizza' />
      </div>
    </Fragment>
  );
};

export default Header;
