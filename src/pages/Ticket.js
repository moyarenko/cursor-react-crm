import { useParams } from 'react-router-dom';

const Ticket = () => {
  let { ticketId } = useParams();
  return (
    <>
      <h1>Ticket {ticketId} </h1>
    </>
  );
};

export default Ticket;
