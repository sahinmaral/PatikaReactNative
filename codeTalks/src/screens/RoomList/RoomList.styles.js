import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  roomListContainer: {flex: 1, padding: 10, backgroundColor: colors.white},
  roomCardContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    height: Dimensions.get('window').height,
  },
  modal: {
    overlay: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      justifyContent: 'flex-end',
    },
  },
  roomCard: {
    container: {
      width: '48%',
      height: Dimensions.get('window').height / 4,
      borderRadius: 5,
      borderWidth: 1,
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: colors.stone[300],
    },
    text: {
      color: colors.orange[400],
      fontWeight: 'bold',
      fontSize: 20,
    },
  },
  addRoomButton: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.orange[400],
  },
});

export default styles;
