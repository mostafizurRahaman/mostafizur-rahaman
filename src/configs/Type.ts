import { User, UserCredential } from "firebase/auth";
import { ChangeEvent, FormEvent } from "react";

export type ChangeTypeInput = (e: ChangeEvent<HTMLInputElement>) => void;
export type ChangeTypeTextArea = (e: ChangeEvent<HTMLTextAreaElement>) => void;
export type FormSubmitType = (e: FormEvent<HTMLFormElement>) => void;
export type  createUserType = (email: string, password: string) => Promise<UserCredential>

export type AddInfoProfileType =  (profile: ProfileType) => Promise<void>

export interface authInfoType {
   user: User;
   setUser: React.Dispatch<React.SetStateAction<User>>;
   createUser: createUserType, 
   LogIn: createUserType, 
   loading: boolean; 
   setLoading: React.Dispatch<React.SetStateAction<boolean>>; 
   AddInfoProfile:AddInfoProfileType;  
}

export interface ProfileType {
   displayURL: string; 
   photoURL: string; 
}