import { useEffect, useState } from "react";
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../firebase.init";

const googleProvider = new GoogleAuthProvider();
const auth = getAuth(app);
const useFirebase = () => {
  const [user, setUser] = useState({});

  const signWithGoogle = () => {
    signInWithPopup(auth, googleProvider).then((result) => {
      const user = result.user;
      setUser(user);
      console.log(user);
    });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);

 const handleSignOut = ()=>{
     signOut(auth)
     .then(()=>{

     })
 }

  return { user, signWithGoogle,handleSignOut };
};
export default useFirebase;
