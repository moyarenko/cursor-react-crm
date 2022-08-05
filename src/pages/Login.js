import { TextField, Typography, Button, FormHelperText } from '@mui/material';
import { useCallback, useState } from 'react';
import logo from '../assets/logo.svg';
import { object, string } from 'yup';

const schema = object().shape({
  email: string().required('Field is required').email('Email is not correct'),
  password: string().required('Field is required'),
});

const Login = ({ onAuth }) => {
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});
  const [password, setPassword] = useState('');

  const handleSubmit = useCallback(async () => {
    const formData = {
      email,
      password,
    };

    try {
      await schema.validate(formData);
      const response = await fetch(`http://localhost:5000/users?email=${email}&password=${password}`);
      const data = await response.json();
      console.log('User: ', data[0]);
      onAuth(data[0]);
    } catch (error) {
      if (error.name === 'ValidationError') {
        setErrors({
          [error.path]: error.message,
        });
      } else {
        setErrors({
          server: error.message,
        });
      }
      console.log('validationResult: ', JSON.stringify(error));
    }
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
          error={!!errors.email}
        />
        {<FormHelperText>{errors.email}</FormHelperText>}
        <TextField
          margin="dense"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          label="Password"
          error={!!errors.password}
        />
        {<FormHelperText>{errors.password}</FormHelperText>}
        {<FormHelperText>{errors.server}</FormHelperText>}
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
