import { User, UserCredential } from "firebase/auth";
import { ChangeEvent, FormEvent } from "react";

export type ChangeTypeInput = (e: ChangeEvent<HTMLInputElement>) => void;
export type ChangeTypeTextArea = (e: ChangeEvent<HTMLTextAreaElement>) => void;
export type FormSubmitType = (e: FormEvent<HTMLFormElement>) => void;
export type  createUserType = (email: string, password: string) => Promise<UserCredential>
export type logOutType   = () => Promise<void>

export type AddInfoProfileType =  (profile: ProfileType) => Promise<void>

export interface authInfoType {
   user: User;
   setUser: React.Dispatch<React.SetStateAction<User>>;
   createUser: createUserType, 
   LogIn: createUserType, 
   loading: boolean; 
   setLoading: React.Dispatch<React.SetStateAction<boolean>>; 
   AddInfoProfile:AddInfoProfileType;  
   logOut: logOutType; 
}

export interface ProfileType {
   displayName: string; 
   photoURL: string; 
   phoneNumber: string; 
}

export type useTokenType = (email: any) => {
   token: string;
   tokenLoading: boolean;
}