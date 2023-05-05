import { useEffect, useState } from "react";
import { useTokenType } from "../configs/Type";

export const useToken: useTokenType = (email) => {
   const [token, setToken] = useState<string>("");
   const [tokenLoading, setTokenLoading] = useState<boolean>(false);
   useEffect(() => {
      if (email) {
         setTokenLoading(true);
         fetch(`http://localhost:5000/jwt?email=${email}`)
            .then((res) => res.json())
            .then((data) => {
               setToken(data.token);
               console.log(data);
               localStorage.setItem("token", data.token);
               setTokenLoading(false);
            });
      }
   }, [email]);
   return { token, tokenLoading };
};
