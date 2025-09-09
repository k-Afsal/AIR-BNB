import { initializeApp, getApp, getApps } from 'firebase/app';

const firebaseConfig = {
  "projectId": "nomad-nest-pw90c",
  "appId": "1:778005602438:web:1bb165907570d9b571f107",
  "storageBucket": "nomad-nest-pw90c.firebasestorage.app",
  "apiKey": "AIzaSyAPSQpmnOxevScssUsA743RZWebbaTwBVg",
  "authDomain": "nomad-nest-pw90c.firebaseapp.com",
  "measurementId": "",
  "messagingSenderId": "778005602438"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export { app };
