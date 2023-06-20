import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import PostJob from "../../components/PostJob/PostJob";
import Services from "../../components/Services/Services";

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
                element:<Services></Services>
            }
        ]
    }
])