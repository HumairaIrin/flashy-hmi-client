import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import ServiceDetails from '../Pages/ServiceDetails/ServiceDetails';
import Services from '../Pages/Services/Services';

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/services',
                element: <Services></Services>,
                loader: () => {
                    return fetch('http://localhost:5000/services');
                }
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/service/:id',
                element: <ServiceDetails></ServiceDetails>
            }
        ]
    }
])
