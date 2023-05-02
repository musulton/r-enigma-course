import api from "../configs/api";

export const getCourses = (page) => {
    return api.get(`/courses?page=${page}&size=3`)
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

export const downloadCourseFile = async (filename) => {
    try {
        const result = api.get("/course-files", {
            responseType: "blob",
            params: { filename }
        })

        const url = window.URL.createObjectURL(new Blob([result?.data]))
        const link = document.createElement('a')
        link.href = url
        link.setAttribute('download', filename)
        document.body.appendChild(link)
        link.click()
    } catch (e) {
        console.log(e)
    }
}