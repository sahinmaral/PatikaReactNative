import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#e4e4e7'},
  contents: {
    flex: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderTopColor: '#e4e4e7',
    borderBottomColor: '#e4e4e7',
    backgroundColor: '#fff',
    marginVertical: 10,
    padding: 10,
  },
  top:{flex: 1, gap: 5, padding: 10},
  title:{fontSize: 25, fontWeight: 'bold', color: '#374151'},
  descriptionRow:{flexDirection: 'row'},
  descriptionLabel:{color:"#ef4444",fontWeight:"bold",fontSize:16},
  description:{fontWeight:"bold",fontSize:16,color:"#000"},
  jobDetailHeader: {
    textAlign: 'center',
    color: '#374151',
    fontSize: 25,
    marginTop: 25,
    fontWeight: 'bold',
  },
  p:{
    fontSize:16,
  },
  a: {
    fontWeight: '300',
    color: '#FF3366',
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#ef4444',
    flex: 1,
    padding: 10,
    borderRadius: 5,
    gap: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  buttonText: {color: '#fff', fontWeight: 'bold'},
});

export default styles;
