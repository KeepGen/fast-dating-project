import React, { useEffect, useState } from "react";
import { validator } from "../../utils/validator";
import TextField from "../form/textField";
import CheckBoxField from "../form/checkBoxField";

const LoginForm = () => {
    const [data, setData] = useState({ email: "", password: "", stayOn: false });
    const [errors, setErrors] = useState({});
    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };
    const validatorConfig = {
        email: {
            isRequired: { message: "Email is required" },
            isEmail: { message: "Email is invalid" }
        },
        password: {
            isRequired: { message: "Password is required" },
            isCapitalSymbol: { message: "Your pass must contain at least one CAPITAL symbol" },
            isDigitSymbol: { message: "Your pass must contain at least one DIGIT symbol" },
            min: {
                message: "Your pass must contain at least 8 SYMBOLS",
                value: 8
            }
        }
    };
    useEffect(() => {
        validate();
    }, [data]);
    const validate = () => {
        const errors = validator(data, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };
    const isValid = Object.keys(errors).length === 0;
    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        console.log(data);
    };
    return (
        <form onSubmit={handleSubmit}>
            <TextField label="Email" name="email" value={data.email} onChange={handleChange} error={errors.email} />
            <TextField label="Password" type="password" name="password" value={data.password} onChange={handleChange} error={errors.password} />
            <CheckBoxField value={data.stayOn} onChange={handleChange} name="stayOn" >Stay online</CheckBoxField>
            <button type="submit" disabled={!isValid} className="btn btn-primary w-100 mx-auto">Submit</button>
        </form>
    );
};

export default LoginForm;
