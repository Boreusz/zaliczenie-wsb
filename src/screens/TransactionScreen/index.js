import { Button, TextInput, View } from 'react-native'
import RNPickerSelect from 'react-native-picker-select'
import React, { useState } from 'react'
import { categories } from '../../constants/data'

const TransactionScreen = ({ addTransaction }) => {
  const [name, setName] = useState('')
  const [amount, setAmount] = useState('')
  const [category, setCategory] = useState('')
  return (
    <View>
      <TextInput
        placeholder='Name'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <RNPickerSelect
        onValueChange={(value) => setCategory(value)}
        items={categories.map((category) => {
          return {
            label: category.heading,
            value: category.heading,
          }
        })}
      />
      <TextInput
        placeholder='Amount'
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        keyboardType='numeric'
      />
      <Button
        title='Add Transaction'
        onPress={() =>
          addTransaction({ name: name, category: category, amount: amount })
        }
      />
    </View>
  )
}

export default TransactionScreen
