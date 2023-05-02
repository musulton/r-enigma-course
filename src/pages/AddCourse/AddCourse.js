import React from "react";
import {Form, Button, ButtonGroup} from "react-bootstrap";

import FormInput from "../../components/FormInput";
import FormSelect from "../../components/FormSelect";
import useAddCourse from "./useAddCourse";
import {StyledTitle, StyledContainer} from "./AddCourse.styled";
import constants from "../../constants";
import useMutation from "../../hooks/useMutation";
import { addCourse } from "../../services/course";
import useQuery from "../../hooks/useQuery";
import { getCourseTypes } from "../../services/courseType";
import { useNavigate } from "react-router-dom";

const FORM_LIST = [
    { id: "title", label: "Title", type: "text", placeholder: "Enter course title" },
    { id: "description", label: "Description", type: "textarea", placeholder: "Enter course description" },
    { id: "courseFile", label: "Course Material", type: "file", placeholder: "Choose course material" },
    { id: "level", label: "Level", type: "text", placeholder: "Enter course level" },
    { id: "duration", label: "Duration", type: "text", placeholder: "Enter course duration" }
]

const AddCourse = (props) => {
    const onNavigate = useNavigate()
    const {getter, setter} = useAddCourse()
    const {onMutation, loading} = useMutation(addCourse, {
        onSuccess: () => {
            onNavigate(constants.routes.COURSE_LIST)
        },
        onError: () => {}
    })
    const {data: courseTypes} = useQuery(getCourseTypes)

    const onSubmit = (e) => {
        e.preventDefault()
        const payload = new FormData();

        payload.append("title", getter.title);
        payload.append("description", getter.description);
        payload.append("courseTypeId", getter.courseTypeId);
        payload.append("file", getter.courseFile);
        payload.append("duration", getter.duration);
        payload.append("level", getter.level);

        onMutation(payload)
    }

    const onCancel = (e) => {
        e.preventDefault()
        onNavigate(constants.routes.COURSE_LIST)
    }

    if (loading) {
        return <h3 className="m-3">Loading...</h3>
    }

    return (
        <StyledContainer>
            <StyledTitle>Add Course Page</StyledTitle>
            <Form>
                {FORM_LIST.map((form) => (
                    <FormInput
                        label={form.label}
                        type={form.type}
                        placeholder={form.placeholder}
                        value={getter[form.id]}
                        onChange={setter[form.id]}
                    />
                ))}
                <FormSelect
                    label="Course Type Id"
                    placeholder="Enter course type id"
                    onChange={setter.courseTypeId}
                    value={getter.courseTypeId}
                    values={courseTypes?.data?.map((type) => {
                        return {
                            value: type.courseTypeId,
                            label: type.typeName
                        }
                    })}
                />
                <ButtonGroup>
                    <Button variant="success" size={"lg"} onClick={onSubmit}>Submit</Button>
                    <Button variant="secondary" size={"lg"} onClick={onCancel}>Cancel</Button>
                </ButtonGroup>
            </Form>
        </StyledContainer>
    )
}

export default AddCourse
