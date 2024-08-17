import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';
import ActionSheet from '@seung-ju/react-native-action-sheet';

export default function App() {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
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
        }}
      >
        <Text>Open Action Sheet</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
