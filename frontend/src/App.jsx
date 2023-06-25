import { useContext, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { checkForLoggedInUser } from './adapters/auth-adapter';
import UserContext from './contexts/current-user-context';
import Home from './pages/Home';
import SignUpPage from './pages/SignUp';
import LoginPage from './pages/Login';
import UsersPage from './pages/Users';
import UserPage from './pages/User';
import Navbar from './components/Navbar';
import NotFoundPage from './pages/NotFound';
import Market from './pages/Market';

export default function App() {
  const { setCurrentUser } = useContext(UserContext);

  useEffect(() => {
    checkForLoggedInUser().then(setCurrentUser);
  }, [setCurrentUser]);

  return <>
    <Navbar />
    <main>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/market' element={<Market />}/>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/sign-up' element={<SignUpPage />} />
        <Route path='/users' element={<UsersPage />} />
        <Route path='/profile/:id' element={<UserPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </main>
  </>;
}
