import { createBrowserRouter } from "react-router-dom";

import Home from '/'
import ListUsers from "./pages/ListUsers";

const router = createBrowserRouter([
{
    path:  '/',
    element: <Home/>
},
{
    path:'/lista-de-usuarios',
    element: <ListUsers/>
},
{
    path:'edicao-de-usuarios'
}

])
export default router