import React, { useState } from "react";
import {Form, Button} from "react-bootstrap";
import FormInput from "../../components/FormInput";
import StyledContainer from "../../components/StyledContainer";
import {onChangeText} from "../../utils/function";
import {useNavigate} from "react-router-dom";
import constants from "../../constants";
import { setToken } from "../../utils/token";
import useMutation from "../../hooks/useMutation";
import { login } from "../../services/auth";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const onNavigate = useNavigate();
    const {onMutation} = useMutation(login, {
      onSuccess: (data) => {
        const token = data?.data
        
        if (token) {
          setToken(token)
          onNavigate(constants.routes.HOME);
        }
      },
      onError: () => {
        alert("Terdapat kesalahan")
      }
    })

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
        onMutation({
          email, password
        })
    }

    return (
        <StyledContainer>
            <h1>Login Form</h1>
            <hr />
            <Form onSubmit={handleSubmit}>
                <FormInput
                    label={"Email"}
                    type="email"
                    placeholder={"Enter your email"}
                    value={email}
                    onChange={onChangeText(setEmail)}
                />
                <FormInput
                    label={"Password"}
                    type="password"
                    placeholder={"Enter your password"}
                    value={password}
                    onChange={onChangeText(setPassword)}
                />
                <Button size="lg" type="submit" variant="success" disabled={!validateForm()}>
                    Login
                </Button>
            </Form>
        </StyledContainer>
    );
}

export default Login;