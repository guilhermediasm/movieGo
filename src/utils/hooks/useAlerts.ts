import { showMessage as DisplayToast } from 'react-native-flash-message';
import { isIOS } from '../helpers/iphoneHelper';

type Position = 'top' | 'bottom';

type Message = string | unknown;

interface AlertActions {
  showError: (message: Message, position?: Position) => void;
  showSuccess: (message: Message, position?: Position) => void;
  showInfo: (message: Message, position?: Position) => void;
  showWarning: (message: Message, position?: Position) => void;
}

const isIOSDevice = isIOS();

const defaultToastStyling = {
  duration: 4000, // 4 seconds
  hideStatusBar: isIOSDevice,
  titleStyle: { fontSize: 16 },
  textStyle: { fontSize: 15 },
  color: '#505D73',
  backgroundColor: '#FFFFFF',
  style: {
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    elevation: 3,
    shadowColor: '#616161',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
};

export function useAlerts(): AlertActions {
  return {
    showError: (message: Message): void => {
      if (message) {
        DisplayToast({
          message: message as string,
          type: 'danger',
          icon: 'danger',
          ...defaultToastStyling,
        });
      }
    },
    showSuccess: (message: Message): void => {
      DisplayToast({
        message: message as string,
        type: 'success',
        icon: 'success',
        ...defaultToastStyling,
      });
    },
    showInfo: (message: Message): void => {
      DisplayToast({
        message: message as string,
        type: 'info',
        ...defaultToastStyling,
      });
    },
    showWarning: (message: Message): void => {
      DisplayToast({
        message: message as string,
        type: 'warning',
        ...defaultToastStyling,
      });
    },
  };
}
