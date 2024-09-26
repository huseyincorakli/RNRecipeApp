import { FC } from 'react'
import {
  ImageBackground,
  Text,
  TouchableWithoutFeedback,
  View
} from 'react-native'
import { styles } from './meal.card.style'

const MealCard: FC<{ mealData: any; navigate: Function }> = ({
  mealData,
  navigate
}) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        navigate(mealData.idMeal)
      }}
    >
      <View style={styles.container}>
        <ImageBackground
          style={styles.image}
          imageStyle={{ borderRadius: 20 }}
          source={{ uri: mealData.strMealThumb }}
        >
          <View style={styles.textContainer}>
            <Text style={styles.text}>
              {mealData.strMeal.length > 22
                ? mealData.strMeal.slice(0, 22) + '...'
                : mealData.strMeal}
            </Text>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default MealCard
