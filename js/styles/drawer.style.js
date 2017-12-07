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
    borderBottomColor: '#3e3e3e',
    borderBottomWidth: 1,
  },
  headerLogo: {
    color: '#9c9c9c',
    fontSize: 18,
    fontWeight: 'bold',
  },
  listRow: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  listIcon: {
    flex: 1,
    paddingTop: 18,
    alignItems: 'center',
    borderBottomColor: '#3e3e3e',
  },
  listContent: {
    flex: 5,
    paddingTop: 18,
    borderBottomColor: '#3e3e3e',
    borderBottomWidth: 1,
    height: 56,
  },
  listText: {
    color: '#fff',
  },
});

export default drawer;
