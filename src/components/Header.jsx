import { useDispatch, useSelector } from 'react-redux';
import classes from './Header.module.css';
import { logout } from '../store/auth-slice';

const Header = () => {
  const isAuth = useSelector((state) => state.auth.isAuth);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          <li>
            <a href="/">My Products</a>
          </li>
          <li>
            <a href="/">My Sales</a>
          </li>

          {isAuth === true && (
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
