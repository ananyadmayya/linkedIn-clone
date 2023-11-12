import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDm0dr8RPf5D1udrLeGSMWyw5edelU1lIo",
    authDomain: "linkedin-clone-cdfb1.firebaseapp.com",
    projectId: "linkedin-clone-cdfb1",
    storageBucket: "linkedin-clone-cdfb1.appspot.com",
    messagingSenderId: "1046862324964",
    appId: "1:1046862324964:web:62d0f650afa9c8a207b8f1"
  };

 const firebaseApp= firebase.initializeApp(firebaseConfig);
 const db = firebaseApp.firestore();
 const auth=firebase.auth();

 export{auth,db};