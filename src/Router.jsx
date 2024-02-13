import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
    Routes,
} from 'react-router-dom'

import { ROUTES } from './shared/routes'
import Blog from './pages/Blog/Blog'
import Contacts from './pages/Contacts/Contacts'
import Home from './pages/Home/Home'
import About from './pages/About/About'


const router = createBrowserRouter(
    createRoutesFromElements(


        <Routes>
            <Route path={ROUTES.DEFAULT} element={<Home />} />
            <Route path={ROUTES.HOME} element={<Home />} />
            <Route path={ROUTES.ABOUT} element={<About />} />
            <Route path={ROUTES.BLOG} element={<Blog />} />
            <Route path={ROUTES.CONTACTS} element={<Contacts />} />
        </Routes>


    )
)

function Router() {
    return <RouterProvider router={router} />
}

export default Router