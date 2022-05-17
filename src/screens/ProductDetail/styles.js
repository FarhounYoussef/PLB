import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  image: {
    width: Dimensions.get('window').width,
    height: 200,
  },
  searchContainer: {
    flexDirection: 'row',
    margin: 5,
  },
  input: {
    flex: 1,
  },
  button: {
    padding: 10,
    backgroundColor: 'red',
    borderRadius: 15,
  },
  searchTitle: {
    color: 'white',
    fontWeight: '700',
  },
});
