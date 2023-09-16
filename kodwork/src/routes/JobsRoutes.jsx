import JobList from '../screens/JobList';
import JobDetail from '../screens/JobDetail';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

function JobsRoutes() {
  return (
    <Stack.Navigator
      initialRouteName="JobList"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="JobList" component={JobList} />
      <Stack.Screen name="JobDetail" component={JobDetail} />
    </Stack.Navigator>
  );
}

export default JobsRoutes;
