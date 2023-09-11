import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  width: '100%',
  height: 100,
  padding: 10,
  borderBottomWidth: 1,
  borderBottomColor: '#a1a1aa',
  flexDirection: 'row',
  left: {width: '30%', thumbnail: {borderRadius: 40}},
  right: {
    width: '70%',
    justifyContent: 'center',
    title: {color: '#000000', fontSize: 22, fontWeight: 700},
    description: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      artist: {
        flexDirection: 'row',
        gap: 5,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        text: {
          fontSize: 14,
          color: '#000000',
        },
        year: {fontSize: 12},
      },
      isSoldOut: {
        color: 'red',
        fontWeight: 700,
        fontSize: 10,
        padding: 5,
      },
    },
  },
});

export default styles;
