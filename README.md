# Setup
```
npx react-native init MyApp
yarn add react-dom react-native-web
yarn add -D babel-plugin-react-native-web
```

# Additional Setup
```
yarn add react-native-vector-icons
yarn add react-native-reanimated (use version "^2.12.0" if having issues on android)
yarn add @react-navigation/native react-native-paper
yarn add @react-navigation/native-stack
yarn add react-native-screens
yarn add react-native-safe-area-context
yarn add -D babel-loader url-loader webpack webpack-cli webpack-dev-server
yarn add -D babel-polyfill
yarn add -D babel-plugin-module-resolver
yarn add -D babel-plugin-inline-json-import
yarn add -D @babel/preset-react
yarn add -D @babel/plugin-proposal-class-properties
yarn add -D @types/react-dom
yarn add -D @types/react-native-vector-icons
```
# Follow the instructions to configure for the Web
https://necolas.github.io/react-native-web/docs/multi-platform/

# How to Build
```
yarn build:web
```
# How to Test
```
yarn test
```
# How to run Web
```
yarn web
```
# How to run iOS
```
yarn ios
```

# How to use Pencil for UI mockups
https://github.com/evolus/pencil