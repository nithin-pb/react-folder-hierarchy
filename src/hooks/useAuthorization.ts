import { useContext } from "react";
import { AuthorizationContext } from "../contexts"

const useAuthorization = () => {
    return useContext(AuthorizationContext)
}

export default useAuthorization