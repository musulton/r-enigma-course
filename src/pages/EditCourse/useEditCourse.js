import React from "react";
import useQuery from "../../hooks/useQuery";
import {getCourseById} from "../../services/course";

const transformCourse = (data) => {
    return {
        courseId: data?.courseId,
        title: data?.title,
        description: data?.description,
        courseFile: data?.link,
        courseTypeId: data?.courseType?.courseTypeId,
        level: data?.courseInfo?.level,
        duration: data?.courseInfo?.duration
    }
}

const useEditCourse = (id) => {
    const [values, setValues] = React.useState(null)

    const onChangeValues = (payload) => {
        const {data} = payload;
        
        setValues(transformCourse(data))
    }

    useQuery(getCourseById, {
        onSuccess: onChangeValues,
        params: id
    })

    return {
        values, setValues
    }
}

export default useEditCourse
