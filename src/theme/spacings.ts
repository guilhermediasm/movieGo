import { getStatusBarHeight, isIphoneX } from '~/modules';

export default {
  statusBarSpacing: `${getStatusBarHeight() + 20}`,
  bottomSpacing: `${isIphoneX() ? 10 : 0}`,
  screenSpacing: 20,
  sectionSpacing: 40,
  sectionlargeSpacing: 50,
  minimumSpacing: 5,
  smallerSpacing: 10,
  smallSpacing: 15,
  normalSpacing: 18,
  mediumSpacing: 20,
  moderateSpacing: 25,
  largeSpacing: 30,
  giantSpacing: 80,
};
