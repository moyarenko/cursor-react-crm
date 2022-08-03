import { Outlet, Link } from 'react-router-dom';

function App() {
  return (
    <>
      <nav>
        <Link to="login">Login</Link> | <Link to="about">About</Link>
      </nav>
      <main className="wrapper">
        <Outlet />
      </main>
    </>
  );
}

export default App;
