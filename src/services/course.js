import api from "../configs/api";

export const getCourses = () => {
    return api.get("/courses")
}

export const getCourseById = (id) => {
    return api.get("/courses/" + id)
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

export const editCourse = (data) => {
    const {courseId, ...payload} = data
    return api.put("/courses/" + courseId, payload)
}