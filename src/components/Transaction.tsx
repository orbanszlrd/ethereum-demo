import './Transaction.css';

export type TransactionProps = {
  sender: string;
  receiver: string;
  amount: number;
  message: string;
};

type EterscanLinkProps = {
  network?: string;
  address: string;
};

const EterscanLink = ({ network = 'goerli', address }: EterscanLinkProps) => {
  const baseUrl = `https://${network}.etherscan.io/address/`;

  return (
    <a
      href={`${baseUrl}${address}`}
      title="Check Address on Eterscan"
      target="_blank"
      rel="noreferrer"
    >
      {address}
    </a>
  );
};

const Transaction = ({
  sender,
  receiver,
  amount,
  message,
}: TransactionProps) => {
  return (
    <article className="transaction">
      <div>
        <span>Sender: </span>
        <span>
          <EterscanLink address={sender} />
        </span>
      </div>
      <div>
        <span>Receiver: </span>
        <EterscanLink address={receiver} />
      </div>
      <div>
        <span>Amount: </span>
        <span style={{ color: 'orange', fontWeight: 'normal' }}>
          {amount} Ether
        </span>
      </div>
      <div>
        <span>Message: </span>
        <span>{message}</span>
      </div>
    </article>
  );
};

export default Transaction;
