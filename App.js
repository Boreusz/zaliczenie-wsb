import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useState } from 'react'
import { Button } from 'react-native'
import { transactions } from './src/constants/data'
import HomeScreen from './src/screens/HomeScreen'
import StatisticsScreen from './src/screens/StatisticsScreen'
import TransactionScreen from './src/screens/TransactionScreen'

const Stack = createNativeStackNavigator()

export default function App() {
  const user = {
    name: 'testUser',
  }
  const [allTransactions, setAllTransactions] = useState(transactions)
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' options={{ headerShown: false }}>
          {(props) => (
            <HomeScreen {...props} user={user} transactions={allTransactions} setTransactions={(newTrs) => setAllTransactions(newTrs)}/>
          )}
        </Stack.Screen>
        <Stack.Screen name='Statistics'>
          {(props) => <StatisticsScreen {...props} transactions={allTransactions}/>}
        </Stack.Screen>
        <Stack.Screen name='Transaction'>
          {(props) => (
            <TransactionScreen
              {...props}
              addTransaction={(transaction) =>
                setAllTransactions([transaction, ...allTransactions,])
              }
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
