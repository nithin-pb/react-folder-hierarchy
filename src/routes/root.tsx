import { Route, Routes } from "react-router-dom";
import { HomePage, NotFound } from '../pages'

export default function RootRoute() {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    )
}
