import { TextField, Typography, Button } from '@mui/material';
import { useCallback, useState } from 'react';
import logo from '../assets/logo.svg';

const Login = ({ onAuth }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = useCallback(async () => {
    const response = await fetch(`http://localhost:5000/users?email=${email}&password=${password}`);
    const data = await response.json();
    console.log('User: ', data[0]);
    onAuth(data[0]);
  }, [email, password, onAuth]);

  return (
    <main className="wrapper dark">
      <form className="login-form">
        <div className="wrapper-logo">
          <img src={logo} alt="Logo" />
        </div>
        <Typography className="sub-title" variant="subtitle1" component="h2">
          Dashboard Kit
        </Typography>
        <Typography className="sub-title-2" variant="body" component="p">
          Enter your email and password below
        </Typography>
        <TextField
          margin="dense"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          label="Email address"
        />
        <TextField
          margin="dense"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          label="Password"
        />
        <Button
          onClick={handleSubmit}
          sx={{
            marginTop: 2,
          }}
          variant="contained"
          color="primary"
          fullWidth
        >
          Log In
        </Button>
      </form>
    </main>
  );
};

export default Login;
