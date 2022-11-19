import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { transactions } from './src/constants/data';
import HomeScreen from './src/screens/HomeScreen';

export default function App() {
  const user = {
    name: "testUser"
  }
  const [allTransactions, setAllTransactions] = useState(transactions)
  return (
    <>
      <HomeScreen user={user} transactions={allTransactions}/>
      <StatusBar style="auto" />
    </>
  );
}