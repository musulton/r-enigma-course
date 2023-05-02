import api from "../configs/api";

export const getCourses = () => {
    return api.get("/courses")
}