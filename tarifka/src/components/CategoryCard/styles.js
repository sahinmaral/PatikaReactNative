import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 80,
    backgroundColor: '#e5e5e5',
    borderColor: '#a1a1aa',
    borderWidth: 1,
    marginVertical: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 40,
    borderBottomLeftRadius: 40,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  thumbnail: {borderRadius: 40, resizeMode: 'contain'},
  title: {color: '#000000', fontSize: 20, fontWeight: '400'},
});

export default styles;
