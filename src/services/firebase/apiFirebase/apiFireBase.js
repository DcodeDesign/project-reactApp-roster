import axios from "axios";
import firebase from "../authFirebase/authFirebase"
var database = firebase.database();

export const apiFirebase = axios.create({
    baseURL:'https://rosterdev-5f258-default-rtdb.europe-west1.firebasedatabase.app/'
})
// http://cis-linux2.temple.edu:8080/fa16_4350_tuf09209/tutorial/tutorial.html
/** owners/[uuid]
 * name: string
 * last_name: string
 * email: string
 */


/** product/[uuid]
 * name: sring
 * description: sring
 * image: sring
 * puuid: number
 * members : object
 */

/** READ
 * database.ref("users/ada");
 * database.ref("users/ada").child('ada')
 */

/** GET */
/*
console.log("GET",database.ref('product-owner').orderByChild("name").limitToLast(1000).once);
*/

/** GET EVENT */
/*
database.ref('product-owner').on("child_added", function(snapshot) {
    console.log("child_added" ,snapshot.key, snapshot.val() );
})

database.ref('product-owner').on("child_changed", function(snapshot) {
    console.log("child_changed" ,snapshot.key, snapshot.val() );
})

database.ref('product-owner').on("child_removed", function(snapshot) {
    console.log("child_removed",snapshot.key, snapshot.val() );
})
*/

/*
Promise.all([
    database.ref('/contact/uuid').push( {
        name: 'Tim',
        city: 'Paris'
    })
]).then(() => {
    console.log("Contacts added to Firebase");
}).catch(error => {
    console.error("Error adding contacts to Firebase", error);
});


Promise.all([
    database.ref('/contact/uuid').on("child_added", function(snapshot) {
        console.log(snapshot.key + " " + snapshot.val().name );
    })
]).then(() => {
    console.log("Contacts added to Firebase");
}).catch(error => {
    console.error("Error adding contacts to Firebase", error);
});*/

/*
import firebase from "../../services/firebase/authFirebase/authFirebase"
var database = firebase.database();
Promise.all(
    database.ref.child("Victor").setValue("setting custom key when pushing new data to firebase database");
)
console.log('database', database);

/!*
firebase.auth().createUserWithEmailAndPassword("test@test.com", "123456789A@")
    .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        console.log('user', user)
        // ...
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode, errorMessage)
        // ..
    });

*!/


firebase.auth().signInWithEmailAndPassword("test@test.com", "123456789A@")
    .then(function (result) {
        console.log('user', result)
    }).catch(function (error) {
});

Promise.all([
    database.ref('/contacts/45474').push( {
        name: 'Tim',
        city: 'Paris'
    })
]).then(() => {
    console.log("Contacts added to Firebase");
}).catch(error => {
    console.error("Error adding contacts to Firebase", error);
});

*/
