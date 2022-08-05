import { List, ListItem, ListItemButton, ListItemText, ListItemIcon } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import PieChartIcon from '@mui/icons-material/PieChart';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
export const Menu = () => {
  let navigate = useNavigate();

  const menuConfig = [
    {
      text: 'Overview',
      icon: <PieChartIcon />,
      link: '',
    },
    { text: 'Tickets', icon: <ConfirmationNumberIcon />, link: '/tickets' },
  ];

  return (
    <List>
      {menuConfig.map((item) => (
        <ListItem key={item.text} disablePadding>
          <ListItemButton key={item.text} onClick={() => navigate(item.link)}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};
