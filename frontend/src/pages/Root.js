import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

function Root() {

    return (
        <>
            <MainNavigation />
            {/* To display children pages, outlet used*/}
            <Outlet />
        </>
    )
};

export default Root;