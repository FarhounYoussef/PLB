import {StyleSheet} from 'react-native';
import {COLORS} from '../../utils/constants';

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
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
