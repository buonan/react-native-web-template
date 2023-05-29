import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Appbar } from 'react-native-paper';
import useGlobalStyles from '../useGlobalStyles';

export default (_: any) => {
  const styles = useGlobalStyles();
  const navigation = useNavigation();

  return (
    <View style={styles.listContainer}>
      <Appbar.Header>
        <Appbar.BackAction
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Appbar.Content title="Base" />
      </Appbar.Header>
      <Text>Hello Screen 2</Text>
    </View>
  );
};
