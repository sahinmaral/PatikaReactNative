import FavouriteJobList from "../screens/FavouriteJobList"
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

function FavouriteJobsRoutes() {
  return (
    <Stack.Navigator
      initialRouteName="FavouriteJobList"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="FavouriteJobList" component={FavouriteJobList} />
      {/* <Stack.Screen name="FavouriteJobDetail" component={JobDetail} /> */}
    </Stack.Navigator>
  );
}

export default FavouriteJobsRoutes;
