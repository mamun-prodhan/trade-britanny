import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import PostJob from "../../components/PostJob/PostJob";
import Category from "../../components/Category/Category";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <PostJob></PostJob>
            },
            {
                path: '/category/:id',
                element:<Category></Category>
            }
        ]
    }
])