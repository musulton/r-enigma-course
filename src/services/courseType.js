import api from "../configs/api";

export const getCourseTypes = () => {
    return api.get("/course-types")
}