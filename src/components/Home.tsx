import { useContext } from 'react';
import { TransactionContext } from '../context/TransactionContext';
import Loader from './Loader';
import Transactions from './Transactions';
import TransactionForm from './TransactionForm';
import EthereumCard from './EthereumCard';

import './Home.css';

const Home = () => {
  const { isLoading } = useContext(TransactionContext);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="home">
          <div>
            <EthereumCard />
            <TransactionForm />
          </div>
          <Transactions />
        </div>
      )}
    </>
  );
};

export default Home;
