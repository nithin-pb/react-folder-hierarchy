import { createContext } from "react";


const AuthorizationContext = createContext({
    authorization: true
});

export default AuthorizationContext;