import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import values from '../../../constants/values'
const { width } = Dimensions.get("screen")
const Category = ({category, onPress}) => {
  return (
    <TouchableOpacity onPress={() => onPress(category.heading)}>
      <View style={[styles.container, {backgroundColor: category.backgroundColor}]}>          
        <Text style={[values.h2Style, {marginTop: 10}]}>{category.heading}</Text>
        <Text style={[values.pWhiteStyle, { textAlign: 'center', fontWeight: 'bold', marginTop: 5}]}>{category.paragraph}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default Category

const styles = StyleSheet.create({
    container: {
        width: width * 0.33,
        height: 150,
        borderRadius: 15,
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    
})