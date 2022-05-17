import {StyleSheet} from 'react-native';
import {COLORS} from '../../utils/constants';

export default StyleSheet.create({
  container: {
    elevation: 5,
    marginHorizontal: 20,
    marginVertical: 10,
    flexDirection: 'row',
    backgroundColor: COLORS.WHITE,
    borderRadius: 10,
  },
  image: {
    width: 100,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    resizeMode: 'contain',
  },
  productDetail: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  productInfo: {
    flexDirection: 'row',
  },
  productName: {
    flex: 1,
    fontWeight: '600',
    color: COLORS.BLACK,
  },
  priceText: {
    color: COLORS.BLACK,
    fontWeight: '700',
  },
  description: {
    flex: 1,
    marginVertical: 5,
  },
  descriptionText: {
    color: COLORS.BLACK,
  },
  stock: {
    textAlign: 'right',
    fontWeight: '700',
  },
  stockIn: {
    color: COLORS.SUCCESS,
  },
  stockOut: {
    color: COLORS.ERROR,
  },
});
