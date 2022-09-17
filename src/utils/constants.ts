import contract from './Transactions.json';

export const contractAddress = import.meta.env.VITE_CONTRACT_ADDRESS;
export const contractABI = contract.abi;
