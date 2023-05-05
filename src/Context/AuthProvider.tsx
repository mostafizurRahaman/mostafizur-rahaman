import { ReactNode, createContext, useState, useEffect } from "react";
import {
   Auth,
   Unsubscribe,
   User,
   createUserWithEmailAndPassword,
   getAuth,
   onAuthStateChanged,
   signInWithEmailAndPassword,
   updateProfile,
} from "firebase/auth";

import app from "../configs/Firebase.config";
import { AddInfoProfileType, ProfileType, authInfoType, createUserType } from "../configs/Type";

interface AuthProviderType {
   children: ReactNode;
}


const auth: Auth = getAuth(app);

export const AuthContext = createContext({} as authInfoType);

const AuthProvider = ({ children }: AuthProviderType) => {
   const [user, setUser] = useState({} as User);
   const [loading, setLoading] = useState<boolean>(false);

   // create User
   const createUser: createUserType = (email, password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
   };

   // Login user
   const LogIn: createUserType = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
   };

   // updateProfile : 
   const AddInfoProfile:AddInfoProfileType  =(profile:ProfileType) => {
      return updateProfile(user, profile)
   }

   // User State cheacker : 
   useEffect(() => {
      const unSubscribe: Unsubscribe = onAuthStateChanged(
         auth,
         (currentUser) => {
            if (currentUser) {
               setUser(currentUser);
               setLoading(false);
               console.log(currentUser); 
            }
         }
      );

      return () => unSubscribe();
   }, []);

   const authInfo: authInfoType = {
      user,
      setUser,
      createUser,
      LogIn,
      loading, 
      setLoading,
      AddInfoProfile
   };

   return (
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
   );
};

export default AuthProvider;
