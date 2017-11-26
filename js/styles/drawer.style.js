import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

const drawer = StyleSheet.create({
  container: {
    paddingTop: getStatusBarHeight(),
  },
  header: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: '#2e2e2e',
    borderBottomWidth: 1,
  },
  headerLogo: {
    color: '#9c9c9c',
    fontSize: 18,
    fontWeight: 'bold',
  },
  list: {
    color: '#fff',
  },
});

export default drawer;
