import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Post from "src/components/Post/Post";
import ResetPassword from "./ResetPassword/ResetPassword";
import SignIn from "./SignIn/SignIn";
import PagesContainer from "./PagesContainer/PagesContainer";
import Home from "./Home/Home";
import Search from "src/components/Search/Search";


export enum RoutesList {

    Home = '/',
    Reset = '/reset',
    Cards = '/cards',
    Post = '/titles/:id',
    Search = 'titles/:search',
    Default = '*',

}


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={RoutesList.Home} element={<PagesContainer />} >

                    <Route path={RoutesList.Reset} element={<ResetPassword />} />
                    <Route path={RoutesList.Home} element={<Home />} />
                    <Route path={RoutesList.Post} element={<Post />} />
                    <Route
                        path={RoutesList.Default}
                        element={<Navigate to={RoutesList.Reset} />}
                    />
                    <Route path={RoutesList.Search} element={<Search />} />

                </Route >
            </Routes>
        </BrowserRouter>
    );
}

export default Router;