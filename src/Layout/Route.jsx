import { createBrowserRouter } from "react-router-dom";
import Blog from "../Components/Blog";
import Error from "../Components/Error";
import Home from "../Components/Home";
import QuizQuestion from "../Components/QuizQuestion";
import Statistics from "../Components/Statistics";
import Topics from "../Components/Topics";
import Main from "./Main";

 const route = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
        errorElement:<Error></Error>,
        children:[
            {path:'/',element:<Home></Home>},
            {path:'/home',element:<Home></Home>},
            {path:'/topics',element:<Topics></Topics>},
            {path:'/topics/:id',
            element:<QuizQuestion></QuizQuestion>,
            loader: ({params})=> fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
            },
            {path:'statistics',element:<Statistics></Statistics>},
            {path:'blog',element:<Blog></Blog>}
        ]
    }

])
export default route
