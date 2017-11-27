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
  list: {
    flex: 1,
  },
  listRow: {
		flex: 1,
		flexDirection: 'row',
    justifyContent: 'center',
  },
  listItem: {
		flex: 1,
		flexDirection: 'row',
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
    paddingBottom: 18,
		borderBottomColor: '#3e3e3e',
		borderBottomWidth: 1,
  },
  listText: {
    paddingTop: 18,
    paddingBottom: 18,
    color: '#fff',
  },
});

export default drawer;
