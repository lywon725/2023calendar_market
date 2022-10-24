import {auth, signInWithGoogle} from '../firebase';

function Login() {
    const LoginChange = ()=>{
        auth.onAuthStateChanged(user => {
            this.setState({ currenUser: user});
        })    
    }
    return (
        <> 
        <button onClick ={signInWithGoogle}>Login</button>

        </>
    );
}

export default Login
