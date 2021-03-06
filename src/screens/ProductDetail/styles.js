import {StyleSheet, Dimensions} from 'react-native';
import {COLORS} from '../../utils/constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  image: {
    width: Dimensions.get('window').width,
    height: 200,
    resizeMode: 'contain',
    backgroundColor: COLORS.WHITE,
  },
  productDetail: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-start',
  },
  productInfo: {
    flexDirection: 'row',
  },
  productName: {
    fontSize: 20,
    fontWeight: '600',
    color: COLORS.BLACK,
  },
  priceText: {
    color: COLORS.BLACK,
    fontWeight: '700',
    marginTop: 15,
    fontSize: 16,
    textAlign: 'right',
  },
  descriptionText: {
    color: COLORS.BLACK,
    marginTop: 15,
    fontSize: 16,
  },
  stock: {
    textAlign: 'right',
    marginTop: 30,
    fontWeight: '700',
  },
  stockIn: {
    color: COLORS.SUCCESS,
  },
  stockOut: {
    color: COLORS.ERROR,
  },
});
