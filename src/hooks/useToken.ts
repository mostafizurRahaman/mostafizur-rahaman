import { useEffect, useState } from "react";
import { useTokenType } from "../configs/Type";
import { baseURL } from "../configs/configs";

export const useToken: useTokenType = (email) => {
   const [token, setToken] = useState<string>("");
   const [tokenLoading, setTokenLoading] = useState<boolean>(false);
   useEffect(() => {
      if (email) {
         setTokenLoading(true);
         fetch(`${baseURL}jwt?email=${email}`)
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
