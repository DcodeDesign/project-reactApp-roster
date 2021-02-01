import firebase from "../authFirebase/authFirebase";
var database = firebase.database();


class ServicesFireBase {
    getAll(path) {
        return database.ref(path);
    }

    setVal(path, data) {
        return database.ref(path).set(data);
    }

    create(path, data) {
        return database.ref(path).push(data);
    }

    update(key, value, path) {
        return database.ref(path).child(key).update(value);
    }

    delete(key, path) {
        return database.ref(path).child(key).remove();
    }

    deleteAll(path) {
        return database.ref(path).remove();
    }
}

export default new ServicesFireBase();
