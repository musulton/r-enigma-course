import React from "react";
import {FormControl, FormGroup, FormLabel, Form} from "react-bootstrap";

const isFileOrNotObject = (value, type) => type === "file" && (typeof value !== "object")

const FormInput = (props) => {
    const {label, type, placeholder, value, onChange, disabled} = props
    let formProps;

    switch (type) {
        case "textarea":
            formProps = { as: type, value }
            break;
        case "file":
            formProps = { type }
            break;
        default:
            formProps = { type, value }
            break;
    }

    return (
        <FormGroup className="mb-3">
            <FormLabel>{label}</FormLabel>
            <FormControl
                {...formProps}
                placeholder={placeholder}
                onChange={onChange}
                disabled={disabled}
            />
            {isFileOrNotObject(value, type) && <Form.Text>{value}</Form.Text>}
        </FormGroup>
    )
}

export default FormInput
