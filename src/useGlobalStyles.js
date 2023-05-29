import { StyleSheet } from 'react-native';

const getGlobalStyles = (props) =>
  StyleSheet.create({
    engine: {
      position: 'absolute',
      right: 0,
    },
    listContainer: {
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
    },
  });

function useGlobalStyles() {
  const styles = getGlobalStyles();
  return styles;
}

export default useGlobalStyles;
