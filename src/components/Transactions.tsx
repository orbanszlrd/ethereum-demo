import { useContext, useEffect } from 'react';
import {
  TransactionContext,
  TransactionType,
} from '../context/TransactionContext';
import Transaction from './Transaction';
import './Transactions.css';

const Transactions = () => {
  const { transactions, getAllTransactions } = useContext(TransactionContext);

  useEffect(() => {
    getAllTransactions();
  }, []);

  return (
    <div className="transactions">
      {transactions && transactions.length > 0 && (
        <>
          <h3>Transactions</h3>
          <div className="transactions-grid">
            {transactions.map(
              ({
                id,
                sender,
                receiver,
                amount,
                message,
                timestamp,
              }: TransactionType) => (
                <Transaction
                  key={id}
                  id={id}
                  sender={sender}
                  receiver={receiver}
                  amount={amount}
                  message={message}
                  timestamp={timestamp}
                />
              )
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Transactions;
