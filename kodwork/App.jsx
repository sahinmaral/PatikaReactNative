import 'react-native-gesture-handler';

import JobsRoutes from './src/routes/JobsRoutes';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {useEffect} from 'react';
import {getData} from './src/utils/storageHelper';
import {useDispatch} from 'react-redux';
import {retriveAllJobIds} from './src/redux/reducers/appSlice';
import FavouriteJobsRoutes from './src/routes/FavouriteJobsRoutes';
import useCheckInternet from './src/hooks/useCheckInternet';
import CheckInternet from './src/screens/CheckInternet';

const Drawer = createDrawerNavigator();

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchAllFavouriteJobIdsFromStorage() {
      const allFavouriteIdsFromStorage = await getData('favouriteJobIds');
      if(allFavouriteIdsFromStorage !== null)
        dispatch(retriveAllJobIds(allFavouriteIdsFromStorage));
    }

    fetchAllFavouriteJobIdsFromStorage();
  }, []);

  const {isConnected} = useCheckInternet();

  if (!isConnected) {
    return <CheckInternet />;
  }

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="JobList">
        <Drawer.Screen
          name="Jobs"
          component={JobsRoutes}
          options={{title: 'Jobs'}}
        />
        <Drawer.Screen
          name="FavouriteJobs"
          component={FavouriteJobsRoutes}
          options={{title: `Favourite Jobs`}}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
