import api from "../configs/api";

export const getCourses = () => {
    return api.get("/courses")
}

export const addCourse = (payload) => {
    return api.post("/courses", payload, {
        headers: {
            "Content-type": "multipart/form-data",
        }
    })
}

export const deleteCourse = (id) => {
    return api.delete("/courses/" + id)
}