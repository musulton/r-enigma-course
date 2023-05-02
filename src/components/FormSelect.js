import React from "react";
import {FormGroup, FormLabel, Form} from "react-bootstrap";

const FormSelect = ({
  label, placeholder, values, onChange, disabled, value
}) => {
  return (
    <FormGroup className="mb-3">
        <FormLabel>{label}</FormLabel>
        <Form.Select
            defaultValue={value}
            disabled={disabled}
            onChange={onChange}
        >
            <option selected>{placeholder}</option>
            {values?.map((item) => (
                <option
                    value={item.value}
                    selected={item.value === value}
                >
                    {item.label}
                </option>
            ))}
        </Form.Select>
    </FormGroup>
  )
}

export default FormSelect