import {createBrowserRouter, Navigate} from "react-router-dom";
import ProtectedLayout from "./Components/ProtectedLayout";
import Dashboard from "./screens/Dashboard/Dashboard";
import UnauthenticatedLayout from "./Components/UnauthenticatedLayout";
import Login from "./screens/Login/Login";
import WeatherScreen from "./screens/Weather/WeatherScreen";

const router = createBrowserRouter([
    {
        path: '/',
        element: <ProtectedLayout/>,
        children: [
            {
                path: '/',
                element: <Navigate to="/dashboard"/>
            },
            {
                path: '/dashboard',
                element: <Dashboard/>
            },
            {
                path: '/weathers/:id',
                element: <WeatherScreen/>
            },
        ]
    },
    {
        path: '/',
        element: <UnauthenticatedLayout/>,
        children: [
            {
                path: '/login',
                element: <Login/>
            }
        ]
    }
]);

export default router;