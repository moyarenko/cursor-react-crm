import { useLayoutEffect } from 'react';
import { useOutletContext } from 'react-router-dom';

const Dashboard = () => {
  const { setTitle, setIstHiddenHeader } = useOutletContext();
  useLayoutEffect(() => {
    setTitle('Dashboard');
  }, [setTitle, setIstHiddenHeader]);

  return (
    <>
      <p>Dashboard</p>
    </>
  );
};

export default Dashboard;
