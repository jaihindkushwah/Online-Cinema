import {GoogleAuthProvider , signInWithPopup} from 'firebase/auth'
import { auth ,db} from './firebase';
import { collection, addDoc, query, where, getDocs} from "firebase/firestore";


const Provider=new GoogleAuthProvider();

export function signUpWithGoogle(dispatch,login,navigate){
    // dispatch(login());
    signInWithPopup(auth,Provider)
    .then((result)=>{
        // const token=result.credential.accessToken;
        const user=result.user;
        
        const usersCollection=collection(db,'users');
        const q=query(usersCollection,where("uid","==",user.uid))
        
        getDocs(q)
        .then((data) => {
            if(data.empty){
                const userData = {
                  uid: user.uid,
                  name: user.displayName,
                  email: user.email,
                  authProvider: "local",
                  photoURL: user.photoURL,
                  phoneNumber: user.phoneNumber,
                };
                addDoc(usersCollection,userData);
            }
        }).then(()=>{
            dispatch(login(JSON.stringify(user)));
            navigate('/');
        })
    })
    .catch((error)=>{
        const errorCode=error.code;
        const errorMessage=error.message;
        alert(errorCode+""+ errorMessage);
    })
}

