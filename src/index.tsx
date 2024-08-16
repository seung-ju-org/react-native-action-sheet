import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-action-sheet' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

const ActionSheet = NativeModules.ActionSheet
  ? NativeModules.ActionSheet
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

export function multiply(a: number, b: number): Promise<number> {
  return ActionSheet.multiply(a, b);
}
