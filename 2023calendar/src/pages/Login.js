import {signInWithGoogle} from '../firebase';

// import { auth } from '../firebase';
// import { GoogleAuthProvider, signInWithPopup } from '../firebase/auth';

function Login() {
    return (
        <> 
        <button onClick ={signInWithGoogle}>Login</button>
        </>
    )
}

export default Login
