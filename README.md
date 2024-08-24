# @seung-ju/react-native-action-sheet

ActionSheet for react native

## Installation

```sh
npm install @seung-ju/react-native-action-sheet
```

## Usage

```js
import ActionSheet from '@seung-ju/react-native-action-sheet';

// ...

ActionSheet.open('Title', 'Message', [
  {
    text: 'Button 1',
    onPress: () => {
      Alert.alert('Button 1');
    },
  },
  {
    text: 'Button 2',
    onPress: () => {
      Alert.alert('Button 2');
    },
    style: 'destructive',
  },
  {
    text: 'Cancel',
    onPress: () => {
      Alert.alert('Cancel');
    },
    style: 'cancel',
  },
]);
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
