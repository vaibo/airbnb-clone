import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import Homepage from "../screen/Homepage";
import Rooms from "../screen/Rooms";
import OnlineExperiences from "../screen/OnlineExperiences";
import AirbnbYourHome from "../screen/AirbnbYourHome";

export default function AirbnbRoutes({}) {
    const ROUTES = [
        {
            path: "/",
            element: <Homepage/>,
        },
        {
            path: "/experiences",
            element: <OnlineExperiences/>,
        },
        {
            path: "/home",
            element: <AirbnbYourHome/>,
        },
        {
            path: "/rooms",
            element: <Rooms/>,
        },
        {
            path: "/rooms",
            element: <Rooms/>,
        },
        {
            path: "*",
            element: <Navigate to="" />,
        },
    ];
    let routes = useRoutes(ROUTES);
    return routes;
}
