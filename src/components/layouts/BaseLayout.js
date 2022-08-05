import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Box, Drawer, Toolbar, Divider } from '@mui/material';
import { Header } from '../Header';
import { Menu } from '../Menu';

export const BaseLayout = ({ user }) => {
  const [title, setTitle] = useState('');
  const [isHiddenHeader, setIstHiddenHeader] = useState(false);

  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer
        sx={{
          width: 300,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 300,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <Menu />
      </Drawer>
      <Box sx={{ flexGrow: 1, padding: 2 }}>
        {!isHiddenHeader ? <Header user={user} title={title} /> : null}
        <Outlet context={{ setTitle, setIstHiddenHeader }} />
      </Box>
    </Box>
  );
};
