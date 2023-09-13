import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 175,
    marginVertical: 10,
  },
  thumbnailContainer: {
    flex: 1,
    width: '100%',
    borderRadius: 10,
    justifyContent: 'flex-end',
  },
  thumbnailImage: {borderRadius: 15},
  titleContainer: {
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    backgroundColor: 'rgba(64, 64, 64, 0.5)',
    width: '100%',
    height: 45,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  titleText: {color: '#fff', fontWeight: '800', fontSize: 30},
});

export default styles;
