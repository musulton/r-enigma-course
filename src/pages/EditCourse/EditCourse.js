import React from "react";
import {Form, Button, ButtonGroup} from "react-bootstrap";

import FormInput from "../../components/FormInput";
import useEditCourse from "./useEditCourse";
import {StyledTitle, StyledContainer} from "./EditCourse.styled";
import useMutation from "../../hooks/useMutation";
import {editCourse} from "../../services/course";
import { getCourseTypes } from "../../services/courseType";
import {onChangeData} from "../../utils/function";
import FormSelect from "../../components/FormSelect";
import constants from "../../constants";
import useQuery from "../../hooks/useQuery";
import { useLocation, useNavigate } from "react-router-dom";

const FORM_LIST = [
    { id: "title", label: "Title", type: "text", placeholder: "Enter course title" },
    { id: "description", label: "Description", type: "textarea", placeholder: "Enter course description" },
    { id: "courseFile", label: "Course Material", type: "file", placeholder: "Choose course material", disabled: true },
    { id: "level", label: "Level", type: "text", placeholder: "Enter course level" },
    { id: "duration", label: "Duration", type: "text", placeholder: "Enter course duration" }
]

const EditCourse = (props) => {
    const params = useLocation()
    const onNavigate = useNavigate()
    const {values, setValues} = useEditCourse(params?.state?.id)

    const {onMutation, loading} = useMutation(editCourse, {
        onSuccess: () => onNavigate(constants.routes.COURSE_LIST),
        onError: () => {}
    })

    const {data: courseTypes} = useQuery(getCourseTypes)

    const onSubmit = () => {
        const payload = {
            ...values,
        }

        delete payload.courseFile

        onMutation(payload)
    }

    if (loading) {
        return <h3 className="m-3">Loading...</h3>
    }

    return (
        <StyledContainer>
            <StyledTitle>Edit Course Page</StyledTitle>
            <Form>
                {FORM_LIST.map((form) => (
                    <FormInput
                        label={form.label}
                        type={form.type}
                        placeholder={form.placeholder}
                        value={values?.[form.id]}
                        onChange={onChangeData(form.id, setValues)}
                        disabled={form.disabled}
                    />
                ))}
                <FormSelect
                    label="Course Type Id"
                    placeholder="Enter course type id"
                    onChange={onChangeData("courseTypeId", setValues)}
                    value={values?.courseTypeId}
                    values={courseTypes?.data?.map((type) => {
                        return {
                            value: type.courseTypeId,
                            label: type.typeName
                        }
                    })}
                />
                <ButtonGroup>
                    <Button
                        variant="success"
                        onClick={onSubmit}
                    >Submit</Button>
                    <Button
                        variant="secondary"
                        onClick={() => onNavigate(constants.routes.COURSE_LIST)}
                    >
                        Cancel
                    </Button>
                </ButtonGroup>
            </Form>
        </StyledContainer>
    )
}

export default EditCourse
