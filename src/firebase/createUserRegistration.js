import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth,db} from "./firebase";
import { collection, addDoc } from "firebase/firestore";


 const userRegistrations=({name,email,password},navigate,dispatch,login)=>{
        createUserWithEmailAndPassword(auth,email,password)
        .then((result)=>{
            const user=result.user;
            const usersCollection=collection(db,'users');
            const address={address:"",picode:'',currentLocation:''}
            const userData={uid: user.uid, name, email, authProvider: "local",address }
            addDoc(usersCollection,userData);
            // alert("created Successfully");
            dispatch(login());
            navigate('/')
            // alert(JSON.stringify(user))
        })
        .catch((error)=>{
            const errorCode=error.errorCode;
            const message=error.message;
            alert(message,errorCode);
        })
}

export default userRegistrations;
