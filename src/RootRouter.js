import { useState, useCallback } from 'react';

import App from './App';
import Login from './pages/Login';
import Page404 from './pages/Page404';
import Dashboard from './pages/Dashboard';
import Tickets from './pages/Tickets';
import Ticket from './pages/Ticket';

import { Routes, Route } from 'react-router-dom';
import { BaseLayout } from './components/layouts';

const USER_LOCAL_KEY = 'user';

const autoLogin = () => {
  const jsonData = localStorage.getItem(USER_LOCAL_KEY);
  if (jsonData) {
    const userData = JSON.parse(jsonData);

    return userData;
  }

  return null;
};

const RootRouter = () => {
  const [user, setUser] = useState(() => autoLogin());

  const handleOnAuth = useCallback((data) => {
    localStorage.setItem(USER_LOCAL_KEY, JSON.stringify(data));
    setUser(data);
  }, []);

  return (
    <Routes>
      <Route path="/" element={<App />}>
        {user ? (
          <Route path="" element={<BaseLayout user={user} />}>
            <Route path="" element={<Dashboard />} />
            <Route path="tickets">
              <Route path="" element={<Tickets />} />
              <Route path=":ticketId" element={<Ticket />} />
            </Route>
          </Route>
        ) : (
          <Route path="" element={<Login onAuth={handleOnAuth} />} />
        )}

        <Route path="*" element={<Page404 />} />
      </Route>
    </Routes>
  );
};

export default RootRouter;
