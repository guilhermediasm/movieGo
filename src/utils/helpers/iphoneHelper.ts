import { Dimensions, Platform } from 'react-native';

export const isIOS = (): boolean => Platform.OS === 'ios';

const screenHeight = Math.round(Dimensions.get('window').height);

export const isSmallDevice: boolean = screenHeight < 600;
