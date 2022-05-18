import {StyleSheet} from 'react-native';
import {COLORS} from '../../utils/constants';

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
    padding: 20,
  },
  imageWrapper: {
    elevation: 4,
    height: 120,
    width: 120,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: 'grey',
    alignSelf: 'center',
    marginBottom: 10,
  },
  image: {
    height: 120,
    width: 120,
    borderRadius: 60,
  },
  pickImage: {
    position: 'absolute',
    right: 0,
    bottom: 8,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'grey',
  },
  input: {
    borderColor: COLORS.LIGHT_BLUE,
    borderWidth: 1,
    borderRadius: 10,
    height: 44,
    paddingLeft: 15,
    marginRight: 10,
    marginBottom: 15,
  },
  searchContainer: {
    flexDirection: 'row',
    marginTop: 20,
    marginHorizontal: 20,
    marginBottom: 10,
  },
  footer: {
    alignItems: 'flex-end',
    margin: 20,
  },
});
