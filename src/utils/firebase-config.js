import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAPz2ByNDtJmeANpIKm_esWVshBgh_452M",
  authDomain: "netflix-18d80.firebaseapp.com",
  projectId: "netflix-18d80",
  storageBucket: "netflix-18d80.appspot.com",
  messagingSenderId: "339927800474",
  appId: "1:339927800474:web:608dcf5263f7f190481d23",
  measurementId: "G-HPP0VTXTG9"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);

