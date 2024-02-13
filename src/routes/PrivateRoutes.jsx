import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
    // Navigate
} from 'react-router-dom';

import { ROUTES } from "../shared/routes";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Blog from "../pages/Blog/Blog";
import Contacts from "../pages/Contacts/Contacts";
import Layout from 'Layout/Layout';

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route
                path={ROUTES.DEFAULT}
                element={<Layout />}
            >
                <Route
                    index
                    element={<Home />}
                />
                <Route
                    path={ROUTES.ABOUT}
                    element={<About />}
                />
                <Route
                    path={ROUTES.BLOG}
                    element={<Blog />}
                />
                <Route
                    path={ROUTES.CONTACTS}
                    element={<Contacts />}
                />
            </Route>
        </>
    )
);

function PrivateRoutes() {
    return (
        <RouterProvider router={router} />
    );
}

export default PrivateRoutes;