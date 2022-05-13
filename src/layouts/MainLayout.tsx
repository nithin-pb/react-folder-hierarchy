import { Header } from "../components";
import { RootRoute } from "../routes";

export default function MainLayout() {
    return (
        <main>
            <Header />
            <RootRoute />
        </main>
    )
}