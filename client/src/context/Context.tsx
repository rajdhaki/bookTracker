import React from "react";
type ContextType = {
    loginStatus: boolean;
    setloginStatus: React.Dispatch<React.SetStateAction<boolean>>;
  };

export const contextApi = React.createContext<ContextType>({
    loginStatus : false,
    setloginStatus: ()=>{}
})