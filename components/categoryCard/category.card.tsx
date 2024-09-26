import React, { FC } from 'react'
import { Image, Text, TouchableWithoutFeedback, View } from 'react-native'
import { styles } from './category.card.style'

const CategoryCard: FC<any> = ({ data, navigate }) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        navigate(data.strCategory)
      }}
    >
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: data.strCategoryThumb }} />
        <Text style={styles.text}> {data.strCategory} </Text>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default CategoryCard
