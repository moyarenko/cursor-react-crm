import { Typography, Box } from '@mui/material';

import { UserHeaderCart } from './UserHeaderCard';

export const Header = ({ title, user }) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexGrow: 1 }}>
      <Typography variant="45" component="h1">
        {title}
      </Typography>
      <UserHeaderCart user={user} />
    </Box>
  );
};
