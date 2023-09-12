import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5c5470',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  blackCurrant: {
    text: {color: '#352f44'},
    background: {backgroundColor: '#352f44'},
  },
  smoky: {
    text: {color: '#5c5470'},
    background: {backgroundColor: '#5c5470'},
  },
  chatelle: {
    text: {color: '#b9b4c7'},
    background: {backgroundColor: '#b9b4c7'},
  },
  linen: {
    text: {color: '#faf0e6'},
    background: {backgroundColor: '#faf0e6'},
    borderBottom: {borderBottomWidth: 3, borderBottomColor: '#faf0e6'},
  },
});

export default styles;
