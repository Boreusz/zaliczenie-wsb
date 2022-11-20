import { View, Text, SafeAreaView, FlatList, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import Greeter from './components/greeter'
import styles from './styles'
import Spacer from '../../components/spacer'
import Category from './components/category'
import Transaction from './components/transaction'
import values from '../../constants/values'
import { categories } from '../../constants/data'

const HomeScreen = ({ navigation, user, transactions }) => {
  const [displayedTransactions, setDisplayedTransactions] =
    useState(transactions)
  const [chosenCategory, setChosenCategory] = useState('')
  useEffect(() => {
    if (chosenCategory === '') {
      setDisplayedTransactions(transactions)
    } else if (chosenCategory === 'Incomes') {
      setDisplayedTransactions(
        transactions.filter((transaction) => +transaction.value > 0)
      )
    } else if (chosenCategory === 'Expenses') {
      setDisplayedTransactions(
        transactions.filter((transaction) => +transaction.value < 0)
      )
    } else {
      setDisplayedTransactions(
        transactions.filter(
          (transaction) => transaction.category === chosenCategory
        )
      )
    }
  }, [chosenCategory])
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.horizontalPaddingView}>
        <Greeter user={user} />
        <Spacer height={20} />
        <Text style={values.h2Style}>Categories</Text>
        <Spacer height={20} />
        <Button
          title='New Transaction'
          onPress={() => navigation.navigate('Transaction')}
        />
        <Button
          title='Statistics'
          onPress={() => navigation.navigate('Statistics')}
        />
        <Spacer height={20} />
        <Text style={values.h2Style}>Categories</Text>
        <Spacer height={20} />
      </View>
      <View style={{ paddingLeft: values.horizontalPadding }}>
        <FlatList
          horizontal
          data={categories}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Category
              category={item}
              onPress={() =>
                setChosenCategory((prev) =>
                  prev !== item.heading ? item.heading : ''
                )
              }
            />
          )}
        />
      </View>

      <View style={styles.horizontalPaddingView}>
        <Spacer height={20} />
        <Text style={values.h2Style}>Transactions History</Text>
        <Spacer height={20} />
        <FlatList
          data={displayedTransactions}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Transaction
              transaction={item}
              onPress={() => console.warn(`Clicked ${item.name}`)}
            />
          )}
          ListEmptyComponent={
            <View
              styles={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Text
                adjustsFontSizeToFit={true}
                style={{ textAlignVertical: 'center', textAlign: 'center' }}
              >
                No Transactions in category
              </Text>
            </View>
          }
        />
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen
