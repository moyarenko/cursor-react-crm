import { useState } from 'react';

import App from './App';
import Login from './pages/Login';
import Page404 from './pages/Page404';

import { Routes, Route } from 'react-router-dom';

const RootRouter = () => {
  const [user, setUser] = useState(null);

  return (
    <Routes>
      <Route path="/" element={<App />}>
        {user ? (
          <Route path="" element={<h1>I`m authorized {user.name}</h1>} />
        ) : (
          <Route path="" element={<Login onAuth={setUser} />} />
        )}

        <Route path="*" element={<Page404 />} />
      </Route>
    </Routes>
  );
};

export default RootRouter;
