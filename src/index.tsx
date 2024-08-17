import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package '@seung-ju/react-native-action-sheet' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

const RNActionSheetManager =
  NativeModules.RNActionSheetManager ||
  new Proxy(
    {},
    {
      get() {
        throw new Error(LINKING_ERROR);
      },
    }
  );

export interface ActionSheetButton {
  text: string;
  onPress?: () => void;
  style?: 'default' | 'cancel' | 'destructive' | undefined;
}

const ActionSheet = {
  open(title?: string, message?: string, buttons?: ActionSheetButton[]) {
    RNActionSheetManager.open(title, message, buttons).then((index: number) => {
      buttons?.[index]?.onPress?.();
    });
  },
};

export default ActionSheet;
