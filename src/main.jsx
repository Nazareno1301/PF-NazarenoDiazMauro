import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCK2FUGuh-hZEm7eqk3w5ZlLBio76_G4nQ",
  authDomain: "sport-store-5909f.firebaseapp.com",
  projectId: "sport-store-5909f",
  storageBucket: "sport-store-5909f.appspot.com",
  messagingSenderId: "80386878412",
  appId: "1:80386878412:web:db3c95fc7338ab71eacb69"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider> 
  </React.StrictMode>,
)
