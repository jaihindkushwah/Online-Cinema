// import {db} from './firebase';
// import { collection, query, where, getDocs } from "firebase/firestore";


// export function checkUsersIsInFirestore(){
//     const usersCollection=collection(db,'users');
//     const q=query(usersCollection,where("name","==","JAIHIND KUSHWAHA"))

//     let isPresent=getDocs(q)
//     .then((querySnapshot) => {
//         return !querySnapshot.empty;

//         // if (isPresent) {
//         //     // Data exists in Firestore
            
//         // } else {
//         //     // No data found in Firestore
//         // }
//     })
//     .catch((error) => {
//     console.log("Error getting documents: ", error);
//     });
//     return isPresent;
// }
