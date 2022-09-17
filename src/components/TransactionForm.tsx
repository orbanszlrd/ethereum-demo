import { useContext, useState } from 'react';
import { FaEthereum } from 'react-icons/fa';
import { TransactionContext } from '../context/TransactionContext';
import { currentMilitaryTime } from '../utils/date-formatter';

import './TransactionForm.css';

const TransactionForm = () => {
  const [receiver, setReceiver] = useState(
    import.meta.env.VITE_RECEIVER_ADDRESS
  );
  const [amount, setAmount] = useState('0.001');
  const [message, setMessage] = useState(`Message ${currentMilitaryTime()}`);

  const { account, connectWallet, sendCrypto } = useContext(TransactionContext);

  const sendEther = (e: React.SyntheticEvent) => {
    e.preventDefault();
    sendCrypto({ receiver, amount, message });
  };

  return (
    <article className="transaction-from">
      <h3>
        <span>Send Ether</span> <FaEthereum />
      </h3>

      {account ? (
        <section>
          <div>
            <input value={account} disabled />
          </div>

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
