import { Box, Avatar, IconButton } from '@mui/material';
import { useCallback, useEffect, useLayoutEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { useNavigate } from 'react-router-dom';

const Tickets = () => {
  const { setTitle } = useOutletContext();
  let navigate = useNavigate();

  useLayoutEffect(() => {
    setTitle('Tickets');
  }, [setTitle]);

  const [tickets, setTickets] = useState([]);

  const loadData = useCallback(async () => {
    const response = await fetch('http://localhost:5000/tickets');
    const data = await response.json();

    console.log(data);
    setTickets(data);
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  return (
    <>
      {tickets.map((ticket) => (
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', m: 1 }} key={ticket.id}>
          <Box sx={{ width: 100 }}>
            <Avatar alt={ticket.customer.name} src={ticket.customer.photo} />
          </Box>
          <Box sx={{ flexGrow: 1 }}>{ticket.name}</Box>
          <Box sx={{ width: 300 }}>{ticket.customer.name}</Box>
          <Box>
            <IconButton onClick={() => navigate(`/tickets/${ticket.id}`, { replace: true })}>
              <RemoveRedEyeIcon />
            </IconButton>
          </Box>
        </Box>
      ))}
    </>
  );
};

export default Tickets;
