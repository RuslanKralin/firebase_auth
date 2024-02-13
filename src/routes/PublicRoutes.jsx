import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
    Navigate
} from 'react-router-dom'

import LogIn from "../pages/LogIn/LogIn";
import SignUp from "../pages/SignUp/SignUp";
import { ROUTES } from 'shared/routes'

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path={ROUTES.LOG_IN} element={<LogIn />} />
            <Route path={ROUTES.SIGN_UP} element={<SignUp />} />
            <Route path="*" element={<Navigate to={ROUTES.LOG_IN} replace />} />
        </>
    )
)

function PublicRoutes() {
    return <RouterProvider router={router} />
}

export default PublicRoutes