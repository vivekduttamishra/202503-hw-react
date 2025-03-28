import HomeScreen from './screens/HomeScreen'
import BookListScreen from './screens/BookListScreen'
import BookAddScreen from './screens/BookAddScreen'
import BookDetailsScreen from './screens/BookDetailsScreen'
import AuthorListScreen from './screens/AuthorListScreen'
import AuthorAddScreen from './screens/AuthorAddScreen'
import AuthorDetailsScreen from './screens/AuthorDetailsScreen'
import UserLoginScreen from './screens/UserLoginScreen'
import UserRegistrationScreen from './screens/UserRegistrationScreen'
import UserProfileScreen from './screens/UserProfileScreen'
import UserFavoritiesScreen from './screens/UserFavoritesScreen'
import NotFoundScreen from './screens/NotFoundScreen'
import UserManage from './screens/UserManage'

const routes=[
    {
        exact:true,
        path:"/",
        element:<HomeScreen/>
    },
    {
        path:"/books",
        element:<BookListScreen title="Recommended Books"/>,
    },
    {
        path:"/books/new",
        element:<BookAddScreen title="Add New Book Info" />,
    },
    {
        path:"/books/:id",
        element:<BookDetailsScreen/>,
    },
    {
        path:"/authors",
        element:<AuthorListScreen/>,
    },
    {
        path:"/authors/new",
        element:<AuthorAddScreen/>,
    },
    {
        path:"/authors/:id",
        element:<AuthorDetailsScreen/>,
    },
    {
        path:"/user/login",
        element:<UserLoginScreen/>,
    },
    {
        path:"/user/register",
        element:<UserRegistrationScreen/>,
    },
    {
        path:"/user/profile",
        element:<UserProfileScreen/>,
    },
    {
        path:"/user/favorites",
        element:<UserFavoritiesScreen/>,
    },
    {
        path:"/users/manage",
        element:<UserManage/>,
    },
    {
        path:"*",
        element:<NotFoundScreen/>,
    },

]

export default routes;