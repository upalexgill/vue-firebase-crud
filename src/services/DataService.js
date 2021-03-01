import firebase from "../firebase";

const db = firebase.ref("/content");

class DataService {
  getAll() {
    return db;
  }

  create(item) {
    return db.push(item);
  }

  update(key, value) {
    return db.child(key).update(value);
  }

  delete(key) {
    return db.child(key).remove();
  }

  deleteAll() {
    return db.remove();
  }
}

export default new DataService();
