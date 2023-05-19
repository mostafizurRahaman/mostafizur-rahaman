import { User, UserCredential } from "firebase/auth";
import { ChangeEvent, FormEvent } from "react";

export type ChangeTypeInput = (e: ChangeEvent<HTMLInputElement>) => void;
export type ChangeTypeTextArea = (e: ChangeEvent<HTMLTextAreaElement>) => void;
export type FormSubmitType = (e: FormEvent<HTMLFormElement>) => void;
export type createUserType = (
   email: string,
   password: string
) => Promise<UserCredential>;
export type logOutType = () => Promise<void>;

export type AddInfoProfileType = (profile: ProfileType) => Promise<void>;

export interface authInfoType {
   user: User | null;
   setUser: React.Dispatch<React.SetStateAction<User | null>>;
   createUser: createUserType;
   LogIn: createUserType;
   loading: boolean;
   setLoading: React.Dispatch<React.SetStateAction<boolean>>;
   AddInfoProfile: AddInfoProfileType;
   logOut: logOutType;
}

export interface ProfileType {
   displayName: string;
   photoURL: string;
   phoneNumber: string;
}

export type useTokenType = (email: string) => {
   token: string;
   tokenLoading: boolean;
};

export interface projectCardType {
   name: string;
   subTitle: string;
   client: string;
   server: string;
   live: string;
   summery: string;
   description: string;
   technology: string[];
   thumbnail: string;
   image1: string;
   image2: string;
   image3: string;
   feature1?: string;
   feature2?: string;
   feature3?: string;
   feature4?: string;
   features:string[]; 
}
export interface ProjectErrorType {
   name: string;
   subTitle: string;
   client: string;
   server: string;
   live: string;
   summery: string;
   description: string;
   technology: "";
   thumbnail: string;
   image1: string;
   image2: string;
   image3: string;
   feature1: string;
   feature2: string;
   feature3: string;
   feature4: string;
}


export interface ExperienceType {
   achivement: string; 
   institute: string; 
   description: string; 
   documents: string; 
   start: string; 
   end: string; 
   general?: string; 
}


export type skills = {
   name: string; 
   expertise: number; 
   icon: string;  
}

export type SkillsError = {
   name: string; 
   expertise: string; 
   icon: string; 
   general?: string; 
}