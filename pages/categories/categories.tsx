import React, { FC, useEffect, useState } from 'react'
import { Button, FlatList, Image, StyleSheet, Text, View } from 'react-native'
import useApi from '../../hooks/useApi'
import CategoryCard from '../../components/categoryCard/category.card'
import { styles } from './categories.style'

const CategoriesPage: FC = ({ navigation }: any) => {
  const { data, loading, error, fetchData } = useApi('categories.php')
  useEffect(() => {
    fetchData()
  }, [])

  const navigate = (item: any) => {
    navigation.navigate('MealsStack', {
      screen: 'MealsPage',
      params: {
        item
      }
    })
  }

  const renderCategoryCard = ({ item }) => (<CategoryCard data={item} navigate={navigate} />)

  return (
    <View style={styles.container}>
      {loading && <Text>Loading...</Text>}
      {data && data.categories && (
        <FlatList
          data={data.categories}
          showsVerticalScrollIndicator={false}
          renderItem={renderCategoryCard}
        />
      )}
    </View>
  )
}


export default CategoriesPage
