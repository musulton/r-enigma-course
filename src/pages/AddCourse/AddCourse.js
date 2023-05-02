import React from "react";
import {Form, Button, ButtonGroup} from "react-bootstrap";

import FormInput from "../../components/FormInput";
import FormSelect from "../../components/FormSelect";
import useAddCourse from "./useAddCourse";
import {StyledTitle, StyledContainer} from "./AddCourse.styled";

const FORM_LIST = [
    { id: "title", label: "Title", type: "text", placeholder: "Enter course title" },
    { id: "description", label: "Description", type: "textarea", placeholder: "Enter course description" },
    { id: "courseFile", label: "Course Material", type: "file", placeholder: "Choose course material" },
    { id: "level", label: "Level", type: "text", placeholder: "Enter course level" },
    { id: "duration", label: "Duration", type: "text", placeholder: "Enter course duration" }
]

const AddCourse = () => {
    const {getter, setter} = useAddCourse()

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
                    values={[
                        { value: "12345", label: "Type Id 12345" }
                    ]}
                />
                <ButtonGroup>
                    <Button variant="success" size={"lg"}>Submit</Button>
                    <Button variant="secondary" size={"lg"}>Cancel</Button>
                </ButtonGroup>
            </Form>
        </StyledContainer>
    )
}

export default AddCourse
