import LottieView from 'lottie-react-native';
import {View, Text} from 'react-native';

function Loading({styles}) {
  return (
    <View style={[{flex: 1, justifyContent: 'center'},styles.container]}>
      <LottieView
        style={{flex: 3}}
        source={require('../../../assets/loading.json')}
        autoPlay
        loop
      />
      <Text
        style={[{
          flex: 2,
          fontSize: 30,
          textAlign: 'center',
          fontWeight: 'bold',
        },styles.text]}>
        Loading ...
      </Text>
    </View>
  );
}

export default Loading;
