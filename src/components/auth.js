import { auth, provider } from "../config/firebase";
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { useState, useEffect } from "react";
import { onAuthStateChanged } from 'firebase/auth';


export const Auth = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log(auth?.currentUser?.email)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        console.log('Zalogowany:', user);
      } else {
        console.log('Nie zalogowany');
      }
    });
  
    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);



  const signIn = async () => {
      try {
        await createUserWithEmailAndPassword(auth, email, password)
      } catch(err){
        console.error(err);
      }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, provider)
    } catch(err){
      console.error(err);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth)
      console.log("signed out");
    } catch(err){
      console.error("error is" + err);
    }
  };

  return (
    <div className="container">
      <div className="row d-flex justify-content-center align-items-center h-100vh">
        <div className="col-11 col-sm-9 col-md-6 col-xlg-4 d-flex flex-column">
          <h1 className="fw-bold text-bg-success rounded-2 p-1 px-2">Welcome to weeks</h1>
          <input type="email" placeholder="Email" className="p-1 my-1" onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" className="p-1 my-1" onChange={(e) => setPassword(e.target.value)}/>
          <div className="col-12 d-flex flex-column justify-content-center align-items-center">
          <button className="btn btn-outline-success  w-100 my-1 fw-bold " onClick={signIn}>Sign In</button>
          <button className="btn btn-outline-success w-100 my-1 fw-bold " onClick={signInWithGoogle}>Sign In with Google</button>
          <button className="btn btn-outline-danger w-100 my-1 fw-bold " onClick={logout}>Sign Out</button>
          </div>
        </div>
      </div>
    </div>
  );
};
