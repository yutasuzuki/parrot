import SQLite from 'react-native-sqlite-storage';
const db = SQLite.openDatabase('parrot.db');

export { db }