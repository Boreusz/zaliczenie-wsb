import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import colors from '../../../constants/colors'
import values from '../../../constants/values'
import CustomButton from '../../../components/customButton'
import { categories } from '../../../constants/data'
const Transaction = ({ transaction, onPress }) => {
  return (
    <View
      style={[
        styles.container,
        {
          borderColor: categories.find(
            (category) => transaction.category === category.heading
          ).backgroundColor,
        },
      ]}
    >
      <View style={styles.leftSection}>
        <View>
          <Text style={values.pStyle}>{transaction.name}</Text>
          <Text style={values.h2Style}>{transaction.value}</Text>
        </View>
      </View>
      <CustomButton
        width={52}
        height={25}
        radius={5}
        textSize={12}
        text='Details'
        backgroundColor={colors.orage}
        onPress={() => onPress(transaction.heading)}
      />
    </View>
  )
}

export default Transaction

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '100%',
    height: 60,
    borderRadius: 10,
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
    paddingEnd: 15,
    borderWidth: 3,
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
})
