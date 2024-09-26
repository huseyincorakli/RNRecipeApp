import {createStackNavigator} from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import CategoriesPage from './pages/categories/categories';
import MealDetailPage from './pages/meals/detail/meal.detail';
import MealsPage from './pages/meals/meals';
import { SafeAreaProvider } from 'react-native-safe-area-context';


const Stack = createStackNavigator()



const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name='Categories' 
        component={CategoriesPage}
        options={{
          headerTitleAlign: 'center',
          headerTitleStyle: {color: '#FFA501'}
        }}
      />
      <Stack.Screen 
        name='MealsStack' 
        component={MealsStack}
        options={{ headerShown: false, }}
      />
    </Stack.Navigator>
  );
};

const MealsStack=()=>{
  return(
    <Stack.Navigator initialRouteName='MealsPage'>
      <Stack.Screen name='MealsPage' component={MealsPage} options={{
        title:'Meals',
        headerTitleAlign:'center',
        headerTitleStyle:{
          color:'#FFA501'
        },
        headerTintColor:'#FFA501'
      }}/>
      <Stack.Screen name='MealDetailPage' component={MealDetailPage} options={{
        title:'Detail',
        headerTitleAlign:'center',
        headerTitleStyle:{
          color:'#FFA501'
        },
        headerTintColor:'#FFA501'
      }}/>
    </Stack.Navigator>
  )
}



export default function App() {
  return (
    <SafeAreaProvider >
    <NavigationContainer>
      <MainStack/>
    </NavigationContainer>
    </SafeAreaProvider>
  );
}
