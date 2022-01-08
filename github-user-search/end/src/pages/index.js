import Dashboard from "./Dashboard";
import Login from "./Login";
import AuthWrapper from "./AuthWrapper";
import PrivateRoute from "./PrivateRoute";
import Error from "./Error";

//named import that allows us to import the components
//in App.js from the folder aka ./pages instead of
//importing from a file aka ./Dashboard
export { Dashboard, Login, AuthWrapper, PrivateRoute, Error };
