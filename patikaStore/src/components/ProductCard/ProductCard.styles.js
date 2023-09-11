const {StyleSheet} = require('react-native');

const styles = StyleSheet.create({
  padding: 10,
  borderRadius: 10,
  marginVertical: 5,
  marginHorizontal: 5,
  backgroundColor: '#e4e4e7',
  thumbnail: {height: '60%', borderRadius: 5},
  description: {
    flex: 1,
    justifyContent: 'space-between',
    title: {fontWeight: 600, fontSize: 18, marginTop: 5},
    price: {fontWeight: 600, fontSize: 15},
    stockStatus: {
      color: 'red',
      textTransform: 'uppercase',
      fontWeight: 700,
    },
  },
});

export default styles;
