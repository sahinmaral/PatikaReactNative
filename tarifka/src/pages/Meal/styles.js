import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fafafa'},
  thumbnail: {resizeMode: 'stretch'},
  headerContainer: {
    gap: 5,
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#a3a3a3',
  },
  headerText: {color: '#991b1b', fontWeight: '700', fontSize: 25},
  instructionContainer: {padding: 5},
  instructionText: {color: '#000000', fontSize: 15},
  youtubeWatchButton: {
    backgroundColor: '#dc2626',
    marginVertical: 10,
    marginHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 10,
    width: '95%',
  },
  youtubeWatchButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default styles;
