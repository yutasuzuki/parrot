import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { color } from './setting.style';

const base = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 45 + getStatusBarHeight(),
    paddingRight: 24,
    paddingLeft: 24,
  },
  titleContainer: {
    marginBottom: 24,
    paddingBottom: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: '#d5d5d5',
  },
  form: {
    flex: 1,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  textContainer: {
  },
  text: {
    fontSize: 16,
  },
  btnSettingContainer: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    zIndex: 1,
    width: 66,
    height: 66,
    borderRadius: 33,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnSetting: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: color.primary,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerSetting: {
    backgroundColor: 'rgba(255, 255, 255, .87)',
    paddingTop: getStatusBarHeight(),
    borderBottomColor: '#f6f6f6',
    borderBottomWidth: 1,
  },
  pickerContainer: {
    flexDirection: 'row',
    height: 120,
    backgroundColor: '#fff',
    borderBottomColor: '#f6f6f6',
    borderBottomWidth: 1,
  },
  pickerTitle: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 2.5,
    height: 120,
  },
  pickerColumn: {
    flex: 1,
  }
});

export default base;
