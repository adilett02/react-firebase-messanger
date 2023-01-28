import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

// // Import the functions you need from the SDKs you need
// import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: 'AIzaSyBbMHWisnic4t9pIEbPY0NoijiJfqgEQSM',
//   authDomain: 'first-project-671a6.firebaseapp.com',
//   databaseURL: 'https://first-project-671a6-default-rtdb.firebaseio.com',
//   projectId: 'first-project-671a6',
//   storageBucket: 'first-project-671a6.appspot.com',
//   messagingSenderId: '623642855265',
//   appId: '1:623642855265:web:144e5327ca55fa1adaa720',
//   measurementId: 'G-PLC0F6RS49',
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

firebase.initializeApp({
  apiKey: 'AIzaSyBbMHWisnic4t9pIEbPY0NoijiJfqgEQSM',
  authDomain: 'first-project-671a6.firebaseapp.com',
  projectId: 'first-project-671a6',
  storageBucket: 'first-project-671a6.appspot.com',
  messagingSenderId: '623642855265',
  appId: '1:623642855265:web:144e5327ca55fa1adaa720',
  measurementId: 'G-PLC0F6RS49',
});

export const Context = createContext(null);

const auth = firebase.auth();
const firestore = firebase.firestore();

ReactDOM.render(
  <Context.Provider
    value={{
      firebase,
      auth,
      firestore,
    }}>
    <App />
  </Context.Provider>,
  document.getElementById('root'),
);
