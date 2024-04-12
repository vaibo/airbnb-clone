import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import Homepage from "../screen/Homepage";
import Rooms from "../screen/Rooms";

export default function AirbnbRoutes({}) {
    const ROUTES = [
        {
            path: "/",
            element: <Homepage/>,
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
