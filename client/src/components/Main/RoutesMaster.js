import Home from '../Home/Home';
import Auth from '../Auth/Auth';
import RegisterClient from '../RegisterClient/RegisterClient'



const RoutesMaster = [
    {
        Path: '/',
        Component: Home,
        Title: 'Home',
        AuthRequired: false
    },{
        Path: '/auth',
        Component: Auth,
        Title: 'Auth',
        AuthRequired: false
    },{
        Path: '/register-client',
        Component: RegisterClient,
        Title: 'Register Client',
        AuthRequired: false
    },
]



export default RoutesMaster;