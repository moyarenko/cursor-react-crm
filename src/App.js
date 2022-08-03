import { Outlet } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';

function App() {
  return (
    <>
      <CssBaseline />
      <Outlet />
    </>
  );
}

export default App;
