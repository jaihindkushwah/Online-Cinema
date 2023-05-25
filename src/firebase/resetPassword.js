import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "./firebase";

export function resetPassword(email,navigate){
    alert(email)
    sendPasswordResetEmail(auth,email)
    .then((res)=>{
        alert('Password reset email send please check in the spam folder')
        console.log(res)
        navigate('/login');
    })
    .catch((error)=>{
        alert('Error sending reset password email '+error)
    })
    
}