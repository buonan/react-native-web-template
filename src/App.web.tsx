/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { DefaultTheme as PaperDefaultTheme, Provider as PaperProvider } from 'react-native-paper';
const theme = {
  ...PaperDefaultTheme,
};
import TabNavigator from './navigation/tab.navigation';

const App = () => {
  return (
    <NavigationContainer>
      <PaperProvider theme={theme}>
        <TabNavigator />
      </PaperProvider>
    </NavigationContainer>
  );
};

export default App;
