import { Platform, StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  hoverComponent: {
    position: 'absolute',
    left: 0,
    right: 0, 
    zIndex: 999,
    elevation: (Platform.OS === 'android') ? 50 : 0
  },
  invisible: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
});
