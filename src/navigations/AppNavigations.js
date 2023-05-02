import React from "react";
import {Route, Routes} from "react-router-dom";

import CourseList from "../pages/CourseList";
import AddCourse from "../pages/AddCourse";
import EditCourse from "../pages/EditCourse";

import constants from "../constants";
import Home from "../pages/Home";
import NavBar from "../components/Navbar";

const AppNavigations = () => {
    return (
        <>
        <NavBar />
            <Routes>
                <Route index={true} path={constants.routes.HOME} element={<Home />} />
                <Route path={constants.routes.COURSE_LIST} element={<CourseList />} />
                <Route path={constants.routes.ADD_COURSE} element={<AddCourse />} />
                <Route path={`${constants.routes.EDIT_COURSE}/:id?`} element={<EditCourse />} />
        </Routes>
        </>
    )
}

export default AppNavigations
