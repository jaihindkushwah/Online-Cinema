import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth,db} from "./firebase";
import { collection, addDoc } from "firebase/firestore";


 const userRegistrations=({name,email,password},navigate,dispatch,login)=>{
        createUserWithEmailAndPassword(auth,email,password)
        .then((result)=>{
            const user=result.user;
            const usersCollection=collection(db,'users');
            const userData = {
                uid: user.uid,
                name: name,
                email:email,
                authProvider: "local",
                photoURL: '',
                phoneNumber: '',
              };
            
            addDoc(usersCollection, userData)
            .then((docRef) => {
                const documentId = docRef.id;
                console.log("New document ID:", documentId);
                dispatch(login(documentId));
            })
             
            // alert("created Successfully");
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
