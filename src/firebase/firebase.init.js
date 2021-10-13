import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const firebaseinitialzation =()=>{
    initializeApp(firebaseConfig);
}
export default firebaseinitialzation;