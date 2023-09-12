import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 5,
    borderRadius: 5,
    padding: 10,
    gap: 10,
    flexDirection: 'row',
    left: {
      flex: 5,
      justifyContent: 'center',
      taskName: {fontWeight: '700', color: '#000000', fontSize: 20},
    },
    right: {
      flex: 1.5,
      gap: 5,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
});

export default styles;
