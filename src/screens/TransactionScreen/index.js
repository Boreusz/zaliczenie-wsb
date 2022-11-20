import { Button, TextInput, View } from 'react-native'
import RNPickerSelect from 'react-native-picker-select'
import React, { useState } from 'react'
import { categories } from '../../constants/data'

const TransactionScreen = ({ navigation, addTransaction }) => {
  const [name, setName] = useState('')
  const [amount, setAmount] = useState('')
  const [category, setCategory] = useState('')
  return (
    <View>
      <TextInput
        placeholder='Name'
        value={name}
        onChangeText={(text) => setName(text)}
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
        onChangeText={(text) => setAmount(text)}
        keyboardType='numeric'
      />
      <Button
        title='Add Transaction'
        onPress={() => {
          addTransaction({
            id: Math.floor(Math.random() * 10000) + 1,
            name: name,
            category: category,
            value: amount,
          })
          navigation.goBack()
        }}
      />
    </View>
  )
}

export default TransactionScreen
