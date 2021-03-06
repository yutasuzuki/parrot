import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { color } from './setting.style';

const list = StyleSheet.create({
	container: {
    flex: 1,
    backgroundColor: '#fff',
		paddingTop: 45 + getStatusBarHeight()
	},
	row: {
		flex: 1,
		flexDirection: 'row',
		backgroundColor: '#fff',
    justifyContent: 'center',
		height: 100,
	},
	behindContainer: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingLeft: 15,
		backgroundColor: '#f3f3f3',
	},
	btnBehide: {
		position: 'absolute',
		top: 0,
		bottom: 0,
		justifyContent: 'center',
		alignItems: 'center',
		width: 75,
	},
	btnEdit: {
		backgroundColor: '#636363',
		right: 0
	},
	btnDelete: {
		backgroundColor: color.primary,
		left: 0
	},
	item: {
		flex: 1,
		flexDirection: 'row',
  },
  posted: {
		flex: 2,
    paddingTop: 18,
    paddingBottom: 20,
		alignItems: 'center',
  },
  textPosted: {
    fontSize: 11,
    color: '#adadad',
  },
  context: {
		flex: 13,
    paddingTop: 18,
    paddingBottom: 20,
		borderBottomColor: '#dfdfdf',
		borderBottomWidth: 1,
  },
  header: {
		marginBottom: 12,
  },
  textTitle: {
		color: '#353535',
		fontSize: 18,
  },
  body: {
		paddingRight: 16,
  },
  textParagrph: {
		fontSize: 14,
    color: '#adadad',
  }
});

export default list;