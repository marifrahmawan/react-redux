import Auth from './components/Auth';
import Counter from './components/Counter';
import UserProfile from './components/UserProfile';
import Header from './components/Header';
import { useSelector } from 'react-redux';

function App() {
  const isAuth = useSelector((state) => state.auth.isAuth);

  return (
    <>
      <Header />

      {!isAuth && <Auth />}
      <Counter />
      <UserProfile />
    </>
  );
}

export default App;
