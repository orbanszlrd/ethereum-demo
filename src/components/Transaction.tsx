import { FaLongArrowAltRight } from 'react-icons/fa';
import './Transaction.css';

export type TransactionProps = {
  id: number;
  sender: string;
  receiver: string;
  amount: number;
  message: string;
  timestamp: string;
};

type EterscanLinkProps = {
  network?: string;
  address: string;
};

const EterscanLink = ({ network = 'goerli', address }: EterscanLinkProps) => {
  const baseUrl = `https://${network}.etherscan.io/address/`;

  const shortAddress = address
    .slice(0, 5)
    .concat('...')
    .concat(address.slice(-4));

  return (
    <a
      href={`${baseUrl}${address}`}
      title="Check Address on Eterscan"
      target="_blank"
      rel="noreferrer"
    >
      {shortAddress}
    </a>
  );
};

const Transaction = ({
  id,
  sender,
  receiver,
  amount,
  message,
  timestamp,
}: TransactionProps) => {
  return (
    <article className="transaction">
      <div className="transaction-id">{id}</div>
      <div className="transaction-amount">
        <span>{amount} ETH</span>
      </div>
      <div className="transaction-parties">
        <span>
          <EterscanLink address={sender} />
        </span>
        <span>
          <FaLongArrowAltRight />
        </span>
        <span>
          <EterscanLink address={receiver} />
        </span>
      </div>
      <div className="transaction-timestamp">
        <span>{timestamp}</span>
      </div>
    </article>
  );
};

export default Transaction;
