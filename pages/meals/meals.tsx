import React, { FC, useEffect, useState } from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import useApi from '../../hooks/useApi';
import MealCard from '../../components/mealCard/meal.card';
import { styles } from './meals.style';

const MealsPage: FC = ({navigation,route}:any) => {

const{data,loading,fetchData} = useApi(`filter.php?c=${route.params.item}`)
 useEffect(()=>{
  fetchData()
 },[])
 
const navigate=(id:string)=>{
  navigation.navigate('MealDetailPage',{
      id
    }
  )
}
const renderMealCard = ({item})=><MealCard navigate={navigate} mealData={item}/>
  return (
      <View style={styles.container}>
        {loading && <Text>Loading...</Text>}
        {data && data.meals && <FlatList  showsVerticalScrollIndicator={false} data={data.meals} renderItem={renderMealCard}/>}
      </View>
  );
};



export default MealsPage;