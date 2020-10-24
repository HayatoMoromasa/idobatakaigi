import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyBy1RCjFn11E9sT07H3OQbNQ-Uq_uT0UDo",
    authDomain: "idobatakaigi-with-ham-8fd72.firebaseapp.com",
    databaseURL: "https://idobatakaigi-with-ham-8fd72.firebaseio.com",
    projectId: "idobatakaigi-with-ham-8fd72",
    storageBucket: "idobatakaigi-with-ham-8fd72.appspot.com",
    messagingSenderId: "433923151564",
    appId: "1:433923151564:web:cd5bb1adbfbff113201469"
  };

firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const messageRef = database.ref('message');
export const pushMessage =({ name, text }) => {
    messageRef.push({ name, text });
}
