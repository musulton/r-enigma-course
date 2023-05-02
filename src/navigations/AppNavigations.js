import React from "react";
import {Route, Routes} from "react-router-dom";

import CourseList from "../pages/CourseList";
import AddCourse from "../pages/AddCourse";
import EditCourse from "../pages/EditCourse";

import constants from "../constants";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Home from "../pages/Home";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";

const AppNavigations = () => {
    const [isLoggedIn, setIsLoggedIn] = React.useState(false)
    
    return (
        <Routes>
            <Route
                path={constants.routes.LOGIN}
                index={true}
                element={<Login setIsLoggedIn={setIsLoggedIn} />}
            />
            <Route path={"*"} element={<NotFound />} />
            <Route
                path={constants.routes.HOME}
                element={<ProtectedRoutes isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} /> }
            >
                <Route index={true} path={constants.routes.HOME} element={<Home />} />
                <Route path={constants.routes.COURSE_LIST} element={<CourseList />} />
                <Route path={constants.routes.ADD_COURSE} element={<AddCourse />} />
                <Route path={`${constants.routes.EDIT_COURSE}/:id?`} element={<EditCourse />} />
            </Route>
        </Routes>
    )
}

export default AppNavigations
