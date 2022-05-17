import {StyleSheet} from 'react-native';
import {COLORS} from '../../utils/constants';

export default StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    backgroundColor: COLORS.PRIMARY,
    borderRadius: 10,
  },
  title: {
    color: 'white',
    fontWeight: '700',
  },
});
