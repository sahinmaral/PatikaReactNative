import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#b9b4c7',
    width: '100%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  input: {paddingHorizontal: 10, fontWeight: '600'},
  submitButton: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    marginTop: 10,
    borderRadius: 5,
    text: {color: '#000000', fontSize: 20, fontWeight: '600'},
  },
});
export default styles;
