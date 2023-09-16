import LottieView from 'lottie-react-native';
import {View, Text, Dimensions} from 'react-native';

function Error({error}) {
  return (
    <View style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
      <LottieView
        style={{
          flex: 3,
          width: Dimensions.get('window').width / 2,
        }}
        source={require('../../../assets/error.json')}
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
        {error}
      </Text>
    </View>
  );
}

export default Error;
