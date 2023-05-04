import { ReactNode, createContext, useState } from "react";

interface AuthProviderType {
   children: ReactNode;
}

interface userType {
   name: string;
   email: string;
   uid: string;
}

interface authInfoType {
   user: userType;
   setUser: React.Dispatch<React.SetStateAction<userType>>;
}

export const AuthContext = createContext({} as authInfoType);

const AuthProvider = ({ children }: AuthProviderType) => {
   const [user, setUser] = useState({} as userType);
   const authInfo: authInfoType = { user, setUser };
   return (
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
   );
};

export default AuthProvider;
