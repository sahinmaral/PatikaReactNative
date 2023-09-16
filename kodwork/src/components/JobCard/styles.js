import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffff',
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 10,
    borderWidth: 1,
    padding: 10,
    gap: 20,
    borderColor: '#d1d5db',
    justifyContent: 'space-between',
  },
  description:{gap:5},
  title: {color: '#000', fontWeight: 'bold', fontSize: 20},
  companyName: {color: '#000', fontWeight: 'semibold', fontSize: 17},
  locationBadge: {
    backgroundColor: '#ef4444',
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
  },
  locationText: {color: '#ffff', fontSize: 17, fontWeight: 'bold'},
  level: {alignSelf: 'flex-end'},
  levelText: {color: '#ef4444', fontWeight: '600'},
});

export default styles;
