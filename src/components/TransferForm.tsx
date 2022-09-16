import { useState } from 'react';
import { FaEthereum } from 'react-icons/fa';

import './TransferForm.css';

const TransferForm = () => {
  const [receiver, setReceiver] = useState('');
  const [amount, setAmount] = useState('0.0001');
  const [message, setMessage] = useState('');

  const sendEther = (e: React.SyntheticEvent) => {
    e.preventDefault();

    const date = new Date();
    const time = `${date.getHours().toString().padStart(2, '0')}:${date
      .getMinutes()
      .toString()
      .padStart(2, '0')}:${date.getSeconds().toString().padStart(2, '0')} ${date
      .getMilliseconds()
      .toString()
      .padStart(3, '0')}`;

    console.log(`Sent at ${time}`);
  };

  return (
    <article className="transfer-from">
      <h3>
        <span>Send Ether</span> <FaEthereum />
      </h3>
      <form onSubmit={sendEther}>
        <div>
          <input
            type="text"
            value={receiver}
            placeholder="Receiver"
            required
            onInput={(e) => setReceiver(e.currentTarget.value)}
          />
        </div>
        <div>
          <input
            type="number"
            min={'0.0001'}
            step={'0.0001'}
            value={amount}
            placeholder="Amount"
            required
            onInput={(e) => setAmount(e.currentTarget.value)}
          />
        </div>
        <div>
          <input
            type="text"
            value={message}
            placeholder="Message"
            required
            onInput={(e) => setMessage(e.currentTarget.value)}
          />
        </div>
        <div>
          <button type="submit">Send</button>
        </div>
      </form>
    </article>
  );
};

export default TransferForm;
