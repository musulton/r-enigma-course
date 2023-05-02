import React from "react";
import {onChangeFile, onChangeText} from "../../utils/function";

const useAddCourse = () => {
    const [title, setTitle] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [courseTypeId, setCourseTypeId] = React.useState("");
    const [courseFile, setCourseFile] = React.useState(null);
    const [level, setLevel] = React.useState("");
    const [duration, setDuration] = React.useState("");

    const getter = {title, description, courseTypeId, courseFile, level, duration};
    const setter = {
        title: onChangeText(setTitle),
        description: onChangeText(setDescription),
        courseTypeId: onChangeText(setCourseTypeId),
        courseFile: onChangeFile(setCourseFile),
        level: onChangeText(setLevel),
        duration: onChangeText(setDuration)
    }

    return {
        getter, setter
    }
}

export default useAddCourse
