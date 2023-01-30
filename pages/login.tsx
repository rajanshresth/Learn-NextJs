import React, { useState } from "react";
import { initFirebase } from "../firebase/firebase";
import {getAuth, signInWithPopup, GoogleAuthProvider, EmailAuthProvider, signInWithEmailAndPassword} from "firebase/auth";

import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";

const LoginPage = () => {
    initFirebase()
    const auth = getAuth();
    const router = useRouter();

    const [user, loading] = useAuthState(auth);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    if(loading){
    return <div>loading...</div>
    }
    if(user){
    router.push('/')
    return <div>{user.displayName} is logged in</div>
    }
    console.log(user)

    const handleGoogleLogin=async()=>{
      const provider= new GoogleAuthProvider();
      const result= await signInWithPopup(auth, provider)
    }
    const handleEmailLogin = async() => {
      if(email !== "" && password !== ""){
        const provider = new EmailAuthProvider();
        const result = await signInWithEmailAndPassword(auth, email, password);
        // console.log(result);
      }
    };
    console.table(handleEmailLogin)


return (
<>
<div>
<button onClick={handleGoogleLogin}>Login with Google</button>
{/* <button onClick={handleFacebookLogin}>Login with Facebook</button> */}
<form>
<label>
Email:
<input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
</label>
<br />
<label>
Password:
<input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
</label>
<br />
<button onClick={handleEmailLogin}>Login with Email</button>
</form>
</div>
</>
);
};

export default LoginPage;