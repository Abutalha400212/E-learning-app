import { createBrowserRouter } from "react-router-dom";
import Blog from "../Components/Blog";
import Home from "../Components/Home";
import Statistics from "../Components/Statistics";
import Topics from "../Components/Topics";
import Main from "./Main";

export const route = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {path:'/',element:<Home></Home>},
            {path:'/home',element:<Home></Home>},
            {path:'/topics',element:<Topics></Topics>},
            {path:'/statistics',element:<Statistics></Statistics>},
            {path:'/blog',element:<Blog></Blog>}
        ]
    }

])

