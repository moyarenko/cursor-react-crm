import { Box, Avatar, Typography } from '@mui/material';

export const UserHeaderCart = ({ user }) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
      <Typography sx={{ paddingRight: 1 }} varian="body">
        {user.name}
      </Typography>
      <Avatar alt={user.name} src={user.photo}></Avatar>
    </Box>
  );
};
