import { useContext } from 'react';
import { TransactionContext } from '../context/TransactionContext';
import Loader from './Loader';
import Transactions from './Transactions';
import TransactionForm from './TransactionForm';

const Home = () => {
  const { isLoading } = useContext(TransactionContext);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <TransactionForm />
          <Transactions />
        </>
      )}
    </>
  );
};

export default Home;
