import { BrowserRouter as Router } from "react-router-dom"
import { AuthorizationContext } from "../contexts"

export default function GlobalProvider({ children }: IGlobalProvider) {
    // context and initialization goes here
    const authorization = true

    return (
        <Router>
            <AuthorizationContext.Provider value={{ authorization }}>
                {children}
            </AuthorizationContext.Provider>
        </Router>
    )
}

interface IGlobalProvider {
    children: React.ReactElement
}