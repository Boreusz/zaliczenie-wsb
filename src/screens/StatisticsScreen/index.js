import { SafeAreaView, Text, View } from 'react-native'
import React from 'react'
import { categories } from '../../constants/data'
import Spacer from '../../components/spacer'

const StatisticsScreen = ({ transactions }) => {
  const calculateAbsoluteBalance = transactions.reduce(
    (sum, trans) => +trans.value + sum,
    0
  )

  const calculateSum = (category) => {
    const adequateTransactions = transactions.filter((trans) =>
      category === 'Expenses'
        ? trans.category !== 'Incomes'
        : trans.category === category
    )
    if (adequateTransactions.length === 0) return 0
    return adequateTransactions.reduce(
      (sum, trans) => Math.abs(+trans.value) + sum,
      0
    )
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <View>
          <Text>Distribution of expenses divided on categories:</Text>
          <Spacer height={20} />

          {categories.map((category, index) => (
            <>
              <Text key={index + category.heading + index}>
                Sum from Category {category.heading}:{' '}
                <Text style={{ fontWeight: 'bold' }}>
                  {calculateSum(category.heading)}
                </Text>
              </Text>
              <Spacer height={10} />
            </>
          ))}
          <Text>
            Final Balance:{' '}
            <Text style={{ fontWeight: 'bold' }}>
              {calculateAbsoluteBalance}
            </Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default StatisticsScreen
