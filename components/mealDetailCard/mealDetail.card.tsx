import React, { FC, useState } from 'react'
import { Image, Linking, ScrollView, Text, View } from 'react-native'
import Button from '../button/button'
import { styles } from './mealDetail.card.style'

const MealDetailCard: FC<{ mealDetailData: any }> = ({ mealDetailData }) => {

  const redirectToYoutube = () => {
    Linking.openURL(mealDetailData.strYoutube)
  }
  
  return (
    <ScrollView style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: mealDetailData.strMealThumb }}
      />
      <View style={styles.body}>
        <Text style={styles.title}> {mealDetailData.strMeal}</Text>
        <Text style={styles.area}> {mealDetailData.strArea}</Text>
        <View style={styles.border}></View>
        <Text style={styles.instructions}>
          {mealDetailData.strInstructions}
        </Text>
        <Button onClick={redirectToYoutube} text={'Watch on Youtube'} />
      </View>
    </ScrollView>
  )
}

export default MealDetailCard
