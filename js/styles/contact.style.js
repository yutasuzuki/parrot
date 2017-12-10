import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { color } from './setting.style';

const contact = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.primary,
    paddingTop: getStatusBarHeight(),
  },
});

export default contact;