import {GoogleAuthProvider , signInWithPopup} from 'firebase/auth'
import { auth } from './firebase';

const Provider=new GoogleAuthProvider();


export function signUpWithGoogle(dispatch,login,navigate){
    // dispatch(login());
    signInWithPopup(auth,Provider)
    .then((result)=>{
        // const token=result.credential.accessToken;
        const user=result.user;
        alert(JSON.stringify(user)+"");
        dispatch(login());
        navigate('/');
    })
    .catch((error)=>{
        const errorCode=error.code;
        const errorMessage=error.message;
        alert(errorCode+""+ errorMessage);
    })
}