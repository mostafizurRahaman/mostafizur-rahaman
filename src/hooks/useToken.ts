import { useEffect, useState } from "react";
import { useTokenType } from "../configs/Type";
import { baseURL } from "../configs/configs";

export const useToken: useTokenType = (email) => {
   const [token, setToken] = useState<string>("");
   const [tokenLoading, setTokenLoading] = useState<boolean>(true);
   useEffect(() => {
      if (email) {
         fetch(`${baseURL}jwt?email=${email}`)
            .then((res) => res.json())
            .then((data) => {
               setToken(data.token);
               console.log(data);
               localStorage.setItem("token", data.token);
               setTokenLoading(false);
            })
            .catch((err) => {
               console.log(err);
            })
            .finally(() => {               
               setTokenLoading(false);
            });
      }
   }, [email]);
   return { token, tokenLoading };
};
