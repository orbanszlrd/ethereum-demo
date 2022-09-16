import './App.css';
import Transactions from './components/Transactions';
import TransferForm from './components/TransferForm';

const App = () => {
  return (
    <div className="App">
      <TransferForm />
      <Transactions />
    </div>
  );
};

export default App;
