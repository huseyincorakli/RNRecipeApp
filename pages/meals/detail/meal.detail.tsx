import React, { FC, useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import useApi from '../../../hooks/useApi';
import MealDetailCard from '../../../components/mealDetailCard/mealDetail.card';

const MealDetailPage: FC = ({route}:any) => {

  const {data,loading,fetchData}=useApi(`lookup.php?i=${route.params.id}`)
  const [mealDetail,setMealDetail]=useState<any>()

  useEffect(()=>{
    fetchData()
  },[])

  useEffect(()=>{
    if(data && data.meals){
      setMealDetail(data.meals[0])
    }
  },[data])
  return (
      <View style={styles.container}>
        {loading && <Text>Loading...</Text> }
        {data && !loading && <MealDetailCard mealDetailData ={mealDetail}/>}
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MealDetailPage;