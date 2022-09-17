import './App.css';
import Home from './components/Home';
import { TransactionProvider } from './context/TransactionContext';

const App = () => {
  return (
    <div className="App">
      <TransactionProvider>
        <Home />
      </TransactionProvider>
    </div>
  );
};

export default App;
