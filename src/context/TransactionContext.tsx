import { createContext, useState, FunctionComponent, ReactNode } from 'react';
import { ethers } from 'ethers';

import { contractABI, contractAddress } from '../utils/constants';

type SendProps = {
  receiver: string;
  amount: string;
  message: string;
};

type TransactionContextType = {
  isLoading: boolean;
  account: string;
  balance: string;
  transactions: any[];
  connectWallet: () => void;
  sendCrypto: ({ receiver, amount, message }: SendProps) => Promise<void>;
  getAllTransactions: () => Promise<void>;
};

export type TransactionType = {
  id: number;
  sender: string;
  receiver: string;
  amount: number;
  message: string;
  timestamp: string;
};

type TransactionProviderProps = { children: ReactNode };

const { ethereum } = window as any;

const provider = new ethers.providers.Web3Provider(ethereum);

const createEthereumContract = () => {
  const signer = provider.getSigner();

  const transactionsContract = new ethers.Contract(
    contractAddress,
    contractABI,
    signer
  );

  return transactionsContract;
};

export const TransactionContext = createContext<TransactionContextType>(
  {} as TransactionContextType
);

export const TransactionProvider: FunctionComponent<
  TransactionProviderProps
> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [account, setAccount] = useState('');
  const [balance, setBalance] = useState('0');
  const [transactions, setTransactions] = useState([] as TransactionType[]);

  const connectWallet = async () => {
    try {
      if (!ethereum) {
        return alert('Please install MetaMask.');
      }

      const accounts = await ethereum.request({
        method: 'eth_requestAccounts',
      });

      setAccount(accounts[0]);

      const balance = ethers.utils.formatEther(
        await provider.getBalance(accounts[0])
      );

      setBalance(balance);

      setTimeout(connectWallet, 1000);
    } catch (error) {
      console.log(error);

      throw new Error('No ethereum object');
    }
  };

  const sendCrypto = async ({ receiver, amount, message }: SendProps) => {
    try {
      if (ethereum) {
        const transactionsContract = createEthereumContract();
        const parsedAmount = ethers.utils.parseEther(amount);

        await ethereum.request({
          method: 'eth_sendTransaction',
          params: [
            {
              from: account,
              to: receiver,
              gas: '0x5208',
              value: parsedAmount._hex,
            },
          ],
        });

        const transactionHash = await transactionsContract.send(
          receiver,
          parsedAmount,
          message
        );

        setIsLoading(true);
        console.log(`Loading - ${transactionHash.hash}`);
        await transactionHash.wait();
        console.log(`Success - ${transactionHash.hash}`);
        setIsLoading(false);
      } else {
        console.log('No ethereum object');
      }
    } catch (error) {
      console.log(error);
      setAccount('');
    }
  };

  const getAllTransactions = async () => {
    try {
      if (ethereum) {
        const transactionsContract = createEthereumContract();

        const transactionsResponse = await transactionsContract.getAll();

        const transactions: TransactionType[] = transactionsResponse
          .map((transaction: any) => ({
            id: parseInt(transaction.id._hex),
            sender: transaction.sender,
            receiver: transaction.receiver,
            amount: parseInt(transaction.amount._hex) / 10 ** 18,
            message: transaction.message,
            timestamp: new Date(
              transaction.timestamp.toNumber() * 1000
            ).toLocaleString(),
          }))
          .reverse();

        setTransactions(transactions);
      } else {
        console.log('Ethereum is not present');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TransactionContext.Provider
      value={{
        isLoading,
        connectWallet,
        account,
        balance,
        transactions,
        sendCrypto,
        getAllTransactions,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
