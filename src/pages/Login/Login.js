import React, { useState } from "react";
import {Form, Button} from "react-bootstrap";
import FormInput from "../../components/FormInput";
import StyledContainer from "../../components/StyledContainer";
import {onChangeText} from "../../utils/function";
import {useNavigate} from "react-router-dom";
import constants from "../../constants";

function Login(props) {
    const {setIsLoggedIn} = props
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const onNavigate = useNavigate();

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
        setIsLoggedIn(true);
        onNavigate(constants.routes.HOME);
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