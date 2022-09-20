import { useContext, useState } from 'react';
import { TransactionContext } from '../context/TransactionContext';
import { currentMilitaryTime } from '../utils/date-formatter';

import './TransactionForm.css';

const TransactionForm = () => {
  const [receiver, setReceiver] = useState(
    import.meta.env.VITE_RECEIVER_ADDRESS
  );
  const [amount, setAmount] = useState('0.1');
  const [message, setMessage] = useState(`${currentMilitaryTime()}`);

  const { account, connectWallet, sendCrypto } = useContext(TransactionContext);

  const sendEther = (e: React.SyntheticEvent) => {
    e.preventDefault();
    sendCrypto({ receiver, amount, message });
  };

  return (
    <article className="transaction-from">
      {account ? (
        <section>
          <form onSubmit={sendEther}>
            <div>
              <input
                type="text"
                value={receiver}
                placeholder="Receiver"
                title="Receiver Address"
                required
                onInput={(e) => setReceiver(e.currentTarget.value)}
              />
            </div>
            <div>
              <input
                type="number"
                min={'0.01'}
                step={'0.01'}
                value={amount}
                placeholder="Amount"
                title="Amount"
                required
                onInput={(e) => setAmount(e.currentTarget.value)}
              />
            </div>
            <div>
              <input
                type="text"
                value={message}
                placeholder="Message"
                title="Message"
                required
                onInput={(e) => setMessage(e.currentTarget.value)}
              />
            </div>
            <div>
              <button type="submit">Send Ether</button>
            </div>
          </form>
        </section>
      ) : (
        <section>
          <div>
            <button type="button" onClick={connectWallet}>
              Connect Wallet
            </button>
          </div>
        </section>
      )}
    </article>
  );
};

export default TransactionForm;
