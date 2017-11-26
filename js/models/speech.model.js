import Realm from 'realm';
import { now } from '../util';

const SpeechShema = {
  name: 'Speeches',
  primaryKey: 'id',
  properties: {
    id: 'int',
    title: 'string?',
    text: 'string?',
    notificationTimes: 'int?[]',
    created: 'string?',
    updated: 'string?',
    deleted: 'string?'
  }
}

class SpeechModel {
  constructor() {
    this.realm = new Realm({
      schema: [SpeechShema], 
      schemaVersion: 2
    });
    console.log(this.realm.path);
  }


  dropTable() {
    // return new Promise((resolve, reject) => {
    //   db.transaction(tx => {
    //     tx.executeSql('drop table items;');
    //     resolve();
    //   });
    // })
  }

  getSpeeches() {
    return new Promise((resolve, reject) => {
      this.realm.write(() => {
        const speeches = this.realm.objects(SpeechShema.name).filtered(`deleted = null`);
        const result = speeches.map(value => value);
        resolve(result);
      });
    });
  }

  getSpeech(id) {
    return new Promise((resolve, reject) => {
      this.realm.write(() => {
        const speech = this.realm.objects(SpeechShema.name).filtered(`id = '${id}'`);
        const result = speech.map(value => value);
        resolve(result);
      });
    });
  }

  getItem(id) {
    // return new Promise((resolve, reject) => {
    //   db.transaction(tx => {
    //     tx.executeSql(`select * from items where id = ?;`, [id], (_, { rows: { _array } }) =>  {
    //       resolve(_array);
    //     });
    //   });
    // })
  }

  deleteItem(id) {
    return new Promise((resolve, reject) => {
      this.realm.write(() => {
        this.realm.create(SpeechShema.name, { 
          id,
          deleted: now()
        }, true);
        resolve();
      });
    });
  }

  createSpeech({id, title, text, notificationTimes, created}) {
    const maxID = this.realm.objects(SpeechShema.name).max('id');
    const incrementID = maxID ? maxID + 1 : 1;
    return new Promise((resolve, reject) => {
      this.realm.write(() => {
        this.realm.create(SpeechShema.name, { 
          id: id || incrementID,
          title, 
          text,
          notificationTimes,
          created: created || now(),
          updated: now()
        }, true);
        resolve();
      });
    });
  }
}

export default new SpeechModel;
