import { useContext } from 'react';
import { FaEthereum } from 'react-icons/fa';
import { TransactionContext } from '../context/TransactionContext';
import './EthereumCard.css';

const EthereumCard = () => {
  const { account, balance } = useContext(TransactionContext);

  return (
    <article className="ethereum-card">
      <h3>Ethereum</h3>
      <div className="logo">
        <FaEthereum size={92} />
      </div>
      {account && balance ? (
        <>
          <div className="account" title={account}>
            Account: {account.slice(0, 5)}...{account.slice(-4)}
          </div>
          <div className="balance" title={balance}>
            Balance: {balance.slice(0, 6)} ETH
          </div>
        </>
      ) : null}
    </article>
  );
};

export default EthereumCard;
