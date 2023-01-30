import React, { useState } from "react";
import { initFirebase } from "../firebase/firebase";
import {getAuth, createUserWithEmailAndPassword, EmailAuthProvider} from "firebase/auth";

import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";

const SignUpWithEmail = () => {
      initFirebase()
      const auth = getAuth();
      const router = useRouter();

      const [user, loading] = useAuthState(auth);
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
      const [error, setError] = useState("");

      if(loading){
      return <div>loading...</div>
      }
      if(user){
      router.push('/')
      return <div>{user.displayName} is logged in</div>
      }

      const handleSignUp=async()=>{
      try {
      const provider= new EmailAuthProvider();
      const result= await createUserWithEmailAndPassword(auth, email, password)
      } catch (error) {
        //@ts-ignore
      setError(error.message)
      }
      }

return (
      <>
        <div>
          <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
          <button onClick={handleSignUp}>Sign Up</button>
          {error && <div>{error}</div>}
        </div>
      </>
      );
};

export default SignUpWithEmail;



