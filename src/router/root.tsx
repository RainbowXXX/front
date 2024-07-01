import {
    createBrowserRouter, Navigate,
} from "react-router-dom";
import BaseView from "../views/BaseView.tsx";
import ChinaView from "../views/ChinaView.tsx";
import MainView from "../views/MainView.tsx";
import DetailView from "../views/DetailView.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <BaseView/>,
        children:[
            {
                path:"/wordcloud",
                element: <MainView/>
            },
            {
                path:"/detail",
                element: <DetailView/>
            },
            {
                path: "/map",
                element: <ChinaView/>
            },
            {
                index: true,
                element: <Navigate to="/wordcloud" />,
            },
        ]
    },
]);

export default router;