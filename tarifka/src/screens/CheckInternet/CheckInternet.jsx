import LottieView from 'lottie-react-native';
import {View, Text, Dimensions} from 'react-native';

function CheckInternet() {
  return (
    <View style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
      <LottieView
        style={{
          flex: 3,
          width: Dimensions.get('window').width / 2,
        }}
        source={require('../../../assets/check-internet.json')}
        autoPlay
        loop
      />
      <Text
        style={{
          flex: 2,
          fontSize: 30,
          textAlign: 'center',
          fontWeight: 'bold',
          color: '#000',
        }}>
        You must have an internet connection to use the application.
      </Text>
    </View>
  );
}

export default CheckInternet;
