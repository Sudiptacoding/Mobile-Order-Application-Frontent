import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//     apiKey: import.meta.env.VITE_apiKey,
//     authDomain: import.meta.env.VITE_authDomain,
//     projectId: import.meta.env.VITE_projectId,
//     storageBucket: import.meta.env.VITE_storageBucket,
//     messagingSenderId: import.meta.env.VITE_messagingSenderId,
//     appId: import.meta.env.VITE_appId,
// };

const firebaseConfig = {
    apiKey: "AIzaSyBIvLUHiIXhCYl-mrxou8M1ekFrbZmyZmc",
    authDomain: "mobile-ordering-f0db2.firebaseapp.com",
    projectId: "mobile-ordering-f0db2",
    storageBucket: "mobile-ordering-f0db2.appspot.com",
    messagingSenderId: "589993400449",
    appId: "1:589993400449:web:0942aecdff6784e79a5580"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth