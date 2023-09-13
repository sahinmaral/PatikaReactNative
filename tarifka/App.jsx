import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CategoryList from './src/pages/Category/CategoryList';
import CategoryDetail from './src/pages/Category/CategoryDetail';
import HeaderLeftButton from './src/components/HeaderLeftButton';
import MealDetail from './src/pages/Meal/MealDetail';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Categories"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerTintColor: '#f97316',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen name="Categories" component={CategoryList} />
        <Stack.Screen
          name="CategoryDetail"
          options={({navigation}) => ({
            title: 'Meals',
            headerLeft: () => (
              <HeaderLeftButton
                text={`Categories`}
                handleAction={() => navigation.goBack()}
              />
            ),
          })}
          component={CategoryDetail}
        />
        <Stack.Screen
          name="MealDetail"
          options={({navigation}) => ({
            title: 'Detail',
            headerLeft: () => (
              <HeaderLeftButton
                text={`Meals`}
                handleAction={() => navigation.goBack()}
              />
            ),
          })}
          component={MealDetail}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
