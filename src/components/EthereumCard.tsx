import { useContext } from 'react';
import { FaEthereum } from 'react-icons/fa';
import { TransactionContext } from '../context/TransactionContext';
import './EthereumCard.css';

const EthereumCard = () => {
  const { account } = useContext(TransactionContext);

  return (
    <article className="ethereum-card">
      <h3>Ethereum</h3>
      <div className="logo">
        <FaEthereum size={92} />
      </div>
      <div className="address">Address: {account}</div>
    </article>
  );
};

export default EthereumCard;
