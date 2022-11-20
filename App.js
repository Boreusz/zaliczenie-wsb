import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useState } from 'react'
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
            <HomeScreen {...props} user={user} transactions={allTransactions} />
          )}
        </Stack.Screen>
        <Stack.Screen
          name='Statistics'
          options={{
            headerRight: () => (
              <Button
                onPress={() => alert('This is a button!')}
                title='Info'
                color='#fff'
              />
            ),
          }}
        >
          {(props) => (
            <StatisticsScreen
              {...props}
              user={user}
              transactions={allTransactions}
            />
          )}
        </Stack.Screen>
        <Stack.Screen
          name='Transactions'
          options={{
            headerRight: () => (
              <Button
                onPress={() => alert('This is a button!')}
                title='Info'
                color='#fff'
              />
            ),
          }}
        >
          {(props) => (
            <TransactionScreen
              {...props}
              user={user}
              transactions={allTransactions}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
