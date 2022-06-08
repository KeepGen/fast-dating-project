import React, { useEffect, useState } from "react";
import { validator } from "../../utils/validator";
import TextField from "../form/textField";
import api from "../../api";
import SelectField from "../form/selectField";
import RadioField from "../form/radioField";
import MultiSelectField from "../form/multiSelectField";
import CheckBoxField from "../form/checkBoxField";

const RegisterForm = () => {
    const [data, setData] = useState({
        email: "",
        password: "",
        profession: "",
        gender: "male",
        qualities: [],
        license: false
    });
    const [qualities, setQualities] = useState({});
    const [professions, setProfessions] = useState();
    const [errors, setErrors] = useState({});

    useEffect(() => {
        api.professions.fetchAll().then((data) => setProfessions(data));
        api.qualities.fetchAll().then((data) => setQualities(data));
    }, []);

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
        },
        profession: {
            isRequired: { message: "Profession is required" }
        },
        license: {
            isRequired: { message: "You must agree with licence agreement to use the website" }
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
            <TextField
                label="Email"
                name="email"
                value={data.email}
                onChange={handleChange}
                error={errors.email}
            />
            <TextField
                label="Password"
                type="password"
                name="password"
                value={data.password}
                onChange={handleChange}
                error={errors.password}
            />
            <SelectField
                label="Choose your profession:"
                defaultOption="Choose..."
                options={professions}
                onChange={handleChange}
                value={data.profession}
                error={errors.profession}
            />
            <RadioField
                label="Select your gender:"
                options={[
                    { name: "Male", value: "male" },
                    { name: "Female", value: "female" },
                    { name: "Other", value: "other" }
                ]}
                value={data.gender}
                name="gender"
                onChange={handleChange}
            />
            <MultiSelectField
                label="Select your qualities:"
                options={qualities}
                onChange={handleChange}
                name="qualities"
            />
            <CheckBoxField
                value={data.license}
                onChange={handleChange}
                name="license"
                error={errors.license}
            >
                Confirm <a>license agreement</a>
            </CheckBoxField>

            <button type="submit" disabled={!isValid} className="btn btn-primary w-100 mx-auto">Submit</button>
        </form>
    );
};

export default RegisterForm;
