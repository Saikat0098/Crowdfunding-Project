import { createContext, useEffect, useState } from "react";
import app from "../FireBase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile,  } from "firebase/auth";

export const AuthContext = createContext() ; 
const auth = getAuth(app) ; 


const AuthProvider = ({children}) => {
    const [user , setUser] = useState(null) ; 
    const [userUid , setUserUid ] = useState(null)
    const [monUserId , setMonUserId ] = useState(null)
    const [loading , setLoading ] = useState(!false)

    console.log(user);

    const createNewUser = (email, password) => {
        setLoading(true);
     
        return createUserWithEmailAndPassword(auth, email, password);
      };
    
      const login = (email , password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth , email , password )
      }

      const logOut = ()=>{
        setLoading(true)
        return signOut(auth)
      }

      const updateUserProfile = (updateData) => {
    
        return updateProfile(auth.currentUser, updateData);
      };

      const provider = new GoogleAuthProvider();

      const googleLogin = () => {
     
        return signInWithPopup(auth, provider);
      };
    const authInfo = {
          user , 
          setUser , 
         createNewUser , 
         login,
         loading , 
         logOut , 
          userUid , 
         setUserUid , 
         monUserId , 
         setMonUserId , 
         updateUserProfile ,
         googleLogin
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
          setUser(currentUser);
          setUserUid(currentUser.uid)
          setMonUserId(currentUser.uid)
          setLoading(false);
        });
        return () => {
          unSubscribe();
        };
      }, []);

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );

    
};

export default AuthProvider;
