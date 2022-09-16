import './Transaction.css';

export type TransactionProps = {
  sender: string;
  receiver: string;
  amount: number;
  message: string;
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
        <span>Sender:</span>
        <span>{sender}</span>
      </div>
      <div>
        <span>Receiver:</span>
        <span>{receiver}</span>
      </div>
      <div>
        <span>Amount:</span>
        <span>{amount}</span>
      </div>
      <div>
        <span>Message: </span>
        <span>{message}</span>
      </div>
    </article>
  );
};

export default Transaction;
